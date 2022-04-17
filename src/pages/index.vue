<script setup lang="ts">
import { ref, computed } from 'vue';
import { VAceEditor } from 'vue3-ace-editor';
import api from './demo1.json';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/theme-dawn';
import ace from 'ace-builds';
import _ from 'lodash';
import { RootObject, CleanApi, generator, Parameter, generatorEnum, CleanEnum, CleanObjectType, generatoTrObjectType } from '../utils/generator'
import workerJsonUrl from 'ace-builds/src-noconflict/worker-json?url';
ace.config.setModuleUrl('ace/mode/json_worker', workerJsonUrl);



const apiContent = ref(JSON.stringify(api, null, 2));


const tsContent = computed(() => {
  const responseObjectType: RootObject = JSON.parse(apiContent.value);
  /**
   * 获取请求url对象
   * {
   *  "/articleeditor/api/v1/task/count": Paths
   * }
   * 
   */
  const pathObject = responseObjectType.paths;
  const pathStringList = Object.keys(pathObject)
  const definitionStringList = Object.keys(responseObjectType.definitions)
  const EnumList: CleanEnum[] = []
  const objectTypeList: CleanObjectType[] = definitionStringList.map(v => {
    const definition = responseObjectType.definitions[v];
    const properties = Object.keys(definition.properties).map(v => {
      const property = definition.properties[v]

      if (property.enum) {
        EnumList.push({ name: v, enum: property.enum })
      }

      return {
        name: v,
        enum: property.enum,
        description: property.description,
        type: property.type,
        items: property.items,
        refType: property.refType ?? property.type ?? property.originalRef
      }
    })
    return {
      name: definition.title,
      isArray: definition.type === 'array',
      properties: properties
    }
  });






  const getApiName = (path: string, method: string, requestParams: Parameter[]) => {
    const hasPathParams = requestParams.filter(v => v.in === 'path').map(v => v.name);
    if (hasPathParams.length) {
      const nameBeforePathParams = _.camelCase(path.replace(/\/\{\w+\}/g, '').split('/').pop() ?? '');
      const pathParams = hasPathParams.map((v, i) => i === 0 ? v : _.upperFirst(v)).join('And');


      return method + _.upperFirst(_.camelCase(nameBeforePathParams)) + 'By' + _.upperFirst(pathParams)
    } else {
      return method + _.upperFirst(_.camelCase(path.split("/").pop()))
    }

  }

  /**
   * 把url和请求方式, requestParams重新合并成新的对象
   */
  const cleanApi: CleanApi[] = pathStringList.map(path => {
    const method = Object.keys(pathObject[path])[0];


    const requestParams = pathObject[path][method].parameters;
    const queryOrPathParams = requestParams.map(v => ({
      type: v.type,
      name: _.camelCase(v.name),
      required: v.required,
      description: v.description,
      in: v.in, example: v['x-example'],
      enum: v.enum,
      schema: v.schema,
    }));
    const list = queryOrPathParams.filter(v => v.enum).map(v => ({ name: v.name, enum: v.enum }));
    EnumList.push(...list)


    const name = getApiName(path, method, requestParams);
    return {
      name: name,
      description: pathObject[path][method].summary,
      path: path,
      method,
      responseType: pathObject[path][method].responses['200'].schema,
      requestParams: queryOrPathParams,
    }
  })
  const typeString = objectTypeList.map(v => generatoTrObjectType(v)).join('\n\n')
  const ApiString = cleanApi.map(v => generator(v)).join('\n\n')
  const EnumString = _.uniqBy(EnumList, v => v.name).map(v => generatorEnum(v)).join('\n\n');


  return typeString + EnumString + ApiString;
});





</script>

<template>
  <div flex justify-evenly>
    <VAceEditor v-model:value="apiContent" lang="json" theme="dawn" style="height:80vh;width: 800px"
      :options="{ useWorker: true }" />

    <VAceEditor v-model:value="tsContent" lang="typescript" theme="dawn" style="height:80vh;width: 800px"
      :options="{ useWorker: true }" />
  </div>
</template>

<style lang="css" >
::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  cursor: pointer;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.15);
  transition: color 0.2s ease;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
