
import _ from 'lodash';
import { StringifiedUtil } from 'unocss';
export interface RootObject {
    paths: Paths;
    definitions: Definitions;
}
export interface PathItemInfo {
    summary: string;
    parameters: Parameter[];
    responses: Response;
    operationId: string;
}

export interface Response {
    [prop: string]: ResponseDetail;

}

export interface ResponseDetail {
    description: string;
    schema: Schema;
}

export interface Schema {
    type: string;
    items?: CleanObjectTypeArrayItem;
    originalRef?: string;
}
export interface PathItem {
    [prop: string]: PathItemInfo
}
export interface Paths {
    [prop: string]: PathItem;
}

export interface DefinitionsItem {
    type: string;
    title: string;
    properties: Properties;

}
export interface PropertyItem {
    type: string;
    description: string;
    refType: string;
    originalRef?: string;
    enum: string[];
    $ref?: string;
    items: CleanObjectTypeArrayItem;
}
export interface Properties {
    [key: string]: PropertyItem;
}

export interface Definitions {
    [prop: string]: DefinitionsItem;
}
export interface Parameter {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
    enum?: string[];
    schema: Schema;
    'x-example': string;
}

export interface CleanParams {
    name: string;
    type: string;
    in: string;
    required: boolean;
    example: string;
    enum?: string[]
    schema?: Schema;
    description: string;
}

export interface CleanEnum {
    name: string;

    enum?: string[]
}
export interface CleanObjectType {
    name: string;
    properties: CleanObjectProperty[];
    isArray: boolean;
}

export interface CleanObjectTypeArrayItem {
    type: string;
    originalRef?: string;
}

export interface CleanObjectProperty {
    name: string;
    type: string;
    enum?: string[];
    description: string;
    items: CleanObjectTypeArrayItem;
    refType?: string;
}


export interface CleanApi {
    name: string;
    path: string;
    method: string;
    description: string;
    items?: CleanObjectTypeArrayItem;
    requestParams: CleanParams[];
    requestData?: Object;
    requestType?: string;
    responseType: Schema;
}



function generatorParams(param: CleanParams, required: boolean) {
    if ("workFlowDriveVo" === param.name) {
        console.log(param);

    }
    const hasRefType = param.schema?.originalRef ?? param.type;
    const isEnum = param.enum ? _.upperFirst(param.name) + 'Enum' : dealWithType(hasRefType);

    if (required) {
        return `${param.name}: ${isEnum}`
    }

    return `${param.name}?: ${isEnum}`
}

function dealWithType(type: string) {


    switch (type) {
        case 'integer':
            return 'number';
        case 'data':
            return 'Data';
        case 'boolean':
            return 'boolean';
        default:
            return type;
    }
}

function generatorResponseType(type: Schema) {

    const hasRefType = type.originalRef ? dealWithType(type.originalRef) : dealWithType(type.type);
    const isArray = type.type === 'array' ? `Array<${type.items?.originalRef ?? type.items?.type}>` : hasRefType;
    if ('Array<array>' === isArray) {
        console.log(type);

    }
    return isArray;



}

function generatorTypeParams(param: CleanObjectProperty) {

    const hasRefType = param.refType ? dealWithType(param.refType) : dealWithType(param.type);
    const isArray = param.type === 'array' ? `Array<${dealWithType(param.items.originalRef ?? param.items.type)}>` : hasRefType;
    const isEnum = param.enum ? _.upperFirst(param.name) + 'Enum' : dealWithType(param.type);
    if (param.enum) {
        console.log(param.description);

        return `${param.description ? '\t//' + param.description + '\n' : ''}\t${param.name}: ${isEnum}`
    } else {

        return `${param.description ? '\t//' + param.description + '\n' : ''}\t${param.name}: ${isArray}`
    }


}

function getParamsString(requestParams: CleanParams[]) {
    const requiredParams = requestParams.filter(v => v.required);
    const notRequiredParams = requestParams.filter(v => !v.required);
    let requiredParamsString = '';
    if (requiredParams.length) {
        requiredParamsString = requiredParams.map((v) => generatorParams(v, true)).join(', ')
    }
    const notRequiredParamsString = notRequiredParams.length ? notRequiredParams.map((v) => generatorParams(v, false)).join(', ') : ''
    return requiredParams.length ? requiredParamsString + ", " + notRequiredParamsString : notRequiredParamsString;
}

function generatorDocParam(requestParams: CleanParams) {
    return ` * @param ${requestParams.name} ${requestParams.description} ${requestParams.example}\n`
}

/**
 * 
 * @param requestParams 
 */
function generatorDoc(requestParams: CleanParams[], description: string) {
    const paramsDocs = requestParams.map((v) => generatorDocParam(v)).join('')
    return `/**\n` + ` * ${description}\n` + `${paramsDocs}` + ` */\n`

}

function dealPathParams(path: string, requestParams: string[]) {
    const cleanPath = path.replace(/\/\{\w+\}/g, '')
    return cleanPath + requestParams.map((v) => `/\${${v}}`).join('')
}

function getQueryParam(requestParams: CleanParams[]) {
    const generatorOne = (requestParam: CleanParams) => `${requestParam.name}, `
    if (requestParams.length === 1) {
        return generatorOne(requestParams[0])
    }

    return requestParams.map((v) => generatorOne(v)).join('\n\t\t\t')

}

export function generatorEnum(param: CleanEnum) {
    const enumItem = param.enum;
    const generatorOne = (v: string) => `\t${v} = \`${v}\``
    return `export enum ${_.upperFirst(param.name)}Enum {\n` +
        `${enumItem?.map(v => generatorOne(v)).join(',\n')}\n` +
        '}\n\n'
}

export function generator(api: CleanApi) {

    const { name, method, requestParams, path, description, responseType } = api;
    const templateParams = getParamsString(requestParams);
    const templateDocs = generatorDoc(requestParams, description);
    const pathParams = requestParams.filter(v => v.in === 'path').map(v => v.name);
    const pathWithParams = dealPathParams(path, pathParams);
    const paramsInQuery = requestParams.filter(v => v.in === 'query');
    const paramsInData = requestParams.filter(v => v.in === 'body')
    return templateDocs +
        `export async function ${name}(${templateParams}) {\n` +
        `\treturn request${responseType ? '<' + generatorResponseType(responseType) + '>' : ''}(\`${pathWithParams}\`, {\n\t\tmethod: '${method}', ` +
        (paramsInQuery.length ? `\n\t\tparams: {\n\t\t\t${getQueryParam(paramsInQuery)}\n\t\t}` : '') +
        (paramsInData.length ? `\n\t\tdata: {\n\t\t\t${getQueryParam(paramsInData)}\n\t\t}` : '') +
        `\n\t});\n` + '}'
}


export function generatoTrObjectType(types: CleanObjectType) {

    return `export interface ${_.upperFirst(_.camelCase(types.name))} {\n` +
        `${types.properties.map(v => generatorTypeParams(v)).join(';\n')}\n` +
        '}\n\n'
}

