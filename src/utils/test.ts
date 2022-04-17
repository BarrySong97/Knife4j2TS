export interface AiTask {
	create_date: string;
	detailUrl: string;
	id: string;
	relationId: string;
	site: string;
	status: number;
	sync: number;
	taskRequest: string;
	taskResult: string;
	type: TypeEnum;
	update_date: string
}



export interface Account {
	accountArticleTypes: Array<AccountArticleType>;
	accountName: string;
	channelId: string;
	clientId: string;
	clientSecret: string;
	create_date: string;
	expiredTime: string;
	extend: string;
	headImg: string;
	id: string;
	plat: string;
	platAccountId: string;
	platName: string;
	site: string;
	token: string;
	type: number;
	update_date: string
}



export interface AccountArticleType {
	accountId: string;
	articleType: number;
	site: string
}



export interface Article {
	accountIdList: Array<string>;
	accountList: Array<Account>;
	adtWkfId: string;
	aiTaskList: Array<AITask>;
	articleData: ArticleData;
	auditNodeList: Array<WorkFlowNode>;
	author: string;
	channel: Channel;
	channelId: string;
	content: string;
	contentId: string;
	createUserCode: string;
	createUserName: string;
	create_date: string;
	editUserCode: string;
	editUserName: string;
	extend: string;
	follow: string;
	grade: Grade;
	id: string;
	keyword: string;
	logoInfo: string;
	materials: string;
	parentId: string;
	platId: string;
	publishUserCode: string;
	publishUserName: string;
	publish_date: string;
	site: string;
	status: number;
	statusStr: string;
	summary: string;
	taskId: string;
	title: string;
	type: number;
	update_date: string
}



export interface ArticleData {
	accessNum: number;
	articleId: string;
	collectNum: number;
	commentNum: number;
	likeNum: number;
	shareNum: number
}



export interface ArticleHistoryVo {
	//源稿件id
	articleId: string;
	//作者
	author: string;
	//内容
	content: string;
	//创建时间，任何操作都不传，只读
	create_date: string;
	//编辑人
	editUserName: string;
	//全局唯一主键，添加时不传，更新填写
	id: string;
	//关键词
	keyword: string;
	//封面集
	logos: Array<素材信息>;
	//版本备注信息
	mark: string;
	//素材集合
	materials: Array<素材信息>;
	//摘要
	summary: string;
	//标题
	title: string;
	//类型
	type: number;
	//修改时间，任何操作都不传，只读
	update_date: string
}



export interface CallBackVo {
	code: number;
	msg: string;
	platId: string;
	taskid: string
}



export interface Channel {
	accountList: Array<Account>;
	articleTypes: Array<number>;
	check: string;
	code: string;
	create_date: string;
	extend: string;
	field: string;
	id: string;
	inner_: number;
	logo: string;
	name: string;
	site: string;
	update_date: string;
	url: string;
	workFlow: WorkFlow
}



export interface Grade {
	articleId: string;
	create_date: string;
	gradeUserName: string;
	score: number;
	update_date: string
}



export interface WkfExecLogVo {
	//创建时间，任何操作都不传，只读
	create_date: string;
	executionDate: string;
	executionUser: string;
	//全局唯一主键，添加时不传，更新填写
	id: string;
	name: string;
	remark: string;
	//修改时间，任何操作都不传，只读
	update_date: string;
	wkfInstanceId: string
}



export interface WorkFlow {
	createUser: string;
	create_date: string;
	id: string;
	name: string;
	site: string;
	text: string;
	updateUser: string;
	update_date: string
}



export interface WorkFlowNode {
	data: string;
	id: string;
	name: string;
	nodeType: NodeTypeEnum;
	source: string;
	sourceList: Array<string>;
	target: string;
	targetList: Array<string>;
	workflowId: string
}



export interface Id返回对象 {
	//唯一主键
	id: string
}



export interface 下拉选项 {
	//选项名
	name: string;
	//选项值
	value: string
}



export interface 内容库id {
	//内容id
	contentId: string
}



export interface 分数实体 {
	//创建时间，任何操作都不传，只读
	create_date: string;
	//打分人
	gradeUserName: string;
	//全局唯一主键，添加时不传，更新填写
	id: string;
	//分数
	score: number;
	//修改时间，任何操作都不传，只读
	update_date: string
}



export interface 分页信息Article稿件实体 {
	list: Array<稿件实体_1>;
	//总页数
	pageCount: number;
	//偏移量 从1开始
	pageNum: number;
	//每页数量
	pageSize: number;
	//总记录数
	total: number
}



export interface 微信爬取返回体 {
	//正文
	content: string;
	//封面
	logo: string;
	//标题
	title: string
}



export interface 扩展信息 {
	//图文稿校验信息
	articleCheck: 校验实体;
	socialCheck: 校验实体;
	//视频稿校验信息
	videoCheck: 校验实体
}



export interface 扩展属性 {
	//时间格式
	dateFormat: string;
	//字符限制，第一项表示最小字符数，第二项表示最大字符数。标签类型的话表示每个标签的字符限制
	fontLimit: Array<string>;
	//是否多选，标识下拉框选项是否为多选
	ifMulty: string;
	multi: boolean;
	//树形下拉框是否可以选择父级
	parentSelectEnable: boolean;
	//正则表达式
	regular: string;
	//下拉选项集合
	setting: Array<下拉选项>;
	//标签限制，标签的个数限制，第一项表示最小个数，第二项表示最大个数。
	tagLimit: Array<string>;
	//提示信息
	tips: string;
	//树形下拉框选项集合
	treeData: Array<树形下拉选项>;
	//树形下拉框的值是否已伴随着父id, 比如 p1,p11,p111...,v1
	treeValueWithPValue: boolean
}



export interface 扩展属性1 {
	//时间格式
	dateFormat: string;
	//字符限制，第一项表示最小字符数，第二项表示最大字符数。标签类型的话表示每个标签的字符限制
	fontLimit: Array<string>;
	//是否多选，标识下拉框选项是否为多选
	ifMulty: string;
	//树形下拉框是否可以选择父级
	parentSelectEnable: string;
	//正则表达式
	regular: string;
	//下拉选项集合
	setting: Array<下拉选项>;
	//标签限制，标签的个数限制，第一项表示最小个数，第二项表示最大个数。
	tagLimit: Array<string>;
	//提示信息
	tips: string;
	//树形下拉框选项集合
	treeData: Array<树形下拉选项>;
	//树形下拉框的值是否已伴随着父id, 比如 p1,p11,p111...,v1
	treeValueWithPValue: string
}



export interface 插件稿件信息 {
	//待发布的稿件信息列表
	articleList: Array<稿件关键信息>;
	//待发布的素材id
	contentId: string
}



export interface 智能任务 {
	//创建时间，任何操作都不传，只读
	create_date: string;
	//全局唯一主键，添加时不传，更新填写
	id: string;
	//状态
	status: number;
	//结果，仅在成功会返回
	taskResult: object;
	//任务类型
	type: TypeEnum;
	//修改时间，任何操作都不传，只读
	update_date: string
}



export interface 树形下拉选项 {
	//子集
	children: Array<树形下拉选项>;
	//选项值
	key: string;
	pkey: string;
	//选项名
	title: string
}



export interface 校验实体 {
	//正文长度区间
	contentLenLimit: Array<number>;
	//封面个数区间
	logoNumLimit: Array<number>;
	//图片个数区间
	picNumLimit: Array<number>;
	//标题长度区间
	titleLenLimit: Array<number>;
	//视频个数区间
	vidNumLimit: Array<number>
}



export interface 流程单次的执行信息 {
	//单次执行记录列表
	execLogList: Array<WkfExecLogVO>;
	//流程实例id
	instanceId: string;
	//流程状态
	instanceStatus: InstanceStatusEnum
}



export interface 流程定义 {
	//创建时间，任何操作都不传，只读
	create_date: string;
	//全局唯一主键，添加时不传，更新填写
	id: string;
	//流程名
	name: string;
	//流程定义json
	text: string;
	//修改时间，任何操作都不传，只读
	update_date: string
}



export interface 流程节点 {
	//创建时间，任何操作都不传，只读
	create_date: string;
	//结点数据
	data: string;
	//全局唯一主键，添加时不传，更新填写
	id: string;
	//流程结点名
	name: string;
	//结点类型
	nodeType: NodeTypeEnum;
	//修改时间，任何操作都不传，只读
	update_date: string
}



export interface 流程驱动请求体 {
	//下一个结点的id
	nodeId: string;
	//备注信息
	remark: string
}



export interface 渠道实体 {
	//账号列表
	accountList: Array<账号实体>;
	//渠道支持的稿件类型，1图文，5视频
	articleTypes: Array<number>;
	//检测信息
	check: 扩展信息;
	//渠道code
	code: string;
	//创建时间，任何操作都不传，只读
	create_date: string;
	//扩展信息
	extend: string;
	//自定义字段列表
	fieldList: Array<自定义字段实体>;
	//全局唯一主键，添加时不传，更新填写
	id: string;
	//是否为内置的渠道，新增修改时不传，1表示内置，0表示非内置，内置渠道前端展示时不要修改和删除操作
	inner_: number;
	//图标
	logo: string;
	//渠道名
	name: string;
	//修改时间，任何操作都不传，只读
	update_date: string;
	//渠道的接口地址
	url: string;
	//绑定的工作流
	workFlowVO: 流程定义
}



export interface 渠道实体1 {
	//账号列表
	accountList: Array<账号实体>;
	//渠道支持的稿件类型，1图文，5视频
	articleTypes: Array<number>;
	//检测信息
	check: 扩展信息;
	//渠道code
	code: string;
	//创建时间，任何操作都不传，只读
	create_date: string;
	//扩展信息
	extend: string;
	//自定义字段列表
	fieldList: Array<自定义字段实体_1>;
	//全局唯一主键，添加时不传，更新填写
	id: string;
	//是否为内置的渠道，新增修改时不传，1表示内置，0表示非内置，内置渠道前端展示时不要修改和删除操作
	inner_: number;
	//图标
	logo: string;
	//渠道名
	name: string;
	//修改时间，任何操作都不传，只读
	update_date: string;
	//渠道的接口地址
	url: string;
	//绑定的工作流
	workFlowVO: 流程定义
}



export interface 版本比较结果 {
	//比较结果
	compareHtml: string;
	//内容1
	htmlOne: string;
	//内容2
	htmlTwo: string
}



export interface 状态信息 {
	//消息
	msg: string;
	//成功标识，true表示成功，false表示失败
	success: boolean
}



export interface 稿件关键信息 {
	//账号id列表
	accountIdList: Array<string>;
	//渠道id
	channelId: string;
	//内容
	content: string;
	//自定义字段集合
	extend: Array<自定字段信息>;
	//封面，预留,目前使用素材关键帧
	logos: Array<素材信息>;
	//标题
	title: string;
	//类型，目前只有视频5
	type: number
}



export interface 稿件实体 {
	//账号id列表
	accountIdList: Array<string>;
	//账号信息
	accountList: Array<账号实体>;
	//关联审核任务数据
	aiTaskVOList: Array<智能任务>;
	//发布数据信息
	articleDataVO: 稿件数据;
	//审核选择结点
	auditNodeList: Array<流程节点>;
	//作者
	author: string;
	//渠道id
	channelId: string;
	//渠道信息
	channelVO: 渠道实体;
	//正文
	content: string;
	//创建人code
	createUserCode: string;
	//创建人昵称
	createUserName: string;
	//创建时间，任何操作都不传，只读
	create_date: string;
	//编辑人code
	editUserCode: string;
	//编辑人昵称
	editUserName: string;
	//自定义字段集合
	extend: Array<自定字段信息>;
	//内容是否跟随父稿
	follow: string;
	//打分信息
	gradeVO: 分数实体;
	//全局唯一主键，添加时不传，更新填写
	id: string;
	//关键词
	keyword: string;
	//封面
	logos: Array<素材信息>;
	//除封面外的素材集合，新媒体稿里面的图片视频，音频，视频稿件的视频素材，图集里面的图片
	materials: Array<素材信息>;
	//父稿id
	parentId: string;
	//状态 -10 回收站 0 初稿/草稿 10 素材入库中 20 审核中 30 推送中 40 推送完成 50 推送失败 60 审核退回 70 审核通过
	status: number;
	//状态字符表现形式 回收站 初稿/草稿 一级审核/二级审核/三级审核... 推送中 推送完成 推送失败 审核退回 审核通过
	statusStr: string;
	//摘要
	summary: string;
	//任务id
	taskId: string;
	title: string;
	//类型 1图文 2图片 5视频 7社交媒体
	type: number;
	//修改时间，任何操作都不传，只读
	update_date: string
}



export interface 稿件实体1 {
	//账号id列表
	accountIdList: Array<string>;
	//账号信息
	accountList: Array<账号实体>;
	//关联审核任务数据
	aiTaskVOList: Array<智能任务>;
	//发布数据信息
	articleDataVO: 稿件数据;
	//审核选择结点
	auditNodeList: Array<流程节点>;
	//作者
	author: string;
	//渠道id
	channelId: string;
	//渠道信息
	channelVO: 渠道实体_1;
	//正文
	content: string;
	//创建人code
	createUserCode: string;
	//创建人昵称
	createUserName: string;
	//创建时间，任何操作都不传，只读
	create_date: string;
	//编辑人code
	editUserCode: string;
	//编辑人昵称
	editUserName: string;
	//自定义字段集合
	extend: Array<自定字段信息>;
	//内容是否跟随父稿
	follow: string;
	//打分信息
	gradeVO: 分数实体;
	//全局唯一主键，添加时不传，更新填写
	id: string;
	//关键词
	keyword: string;
	//封面
	logos: Array<素材信息>;
	//除封面外的素材集合，新媒体稿里面的图片视频，音频，视频稿件的视频素材，图集里面的图片
	materials: Array<素材信息>;
	//父稿id
	parentId: string;
	//状态 -10 回收站 0 初稿/草稿 10 素材入库中 20 审核中 30 推送中 40 推送完成 50 推送失败 60 审核退回 70 审核通过
	status: number;
	//状态字符表现形式 回收站 初稿/草稿 一级审核/二级审核/三级审核... 推送中 推送完成 推送失败 审核退回 审核通过
	statusStr: string;
	//摘要
	summary: string;
	//任务id
	taskId: string;
	title: string;
	//类型 1图文 2图片 5视频 7社交媒体
	type: number;
	//修改时间，任何操作都不传，只读
	update_date: string
}



export interface 稿件数据 {
	//阅读量
	accessNum: number;
	//收藏数
	collectNum: number;
	//评论量
	commentNum: number;
	//创建时间，任何操作都不传，只读
	create_date: string;
	//全局唯一主键，添加时不传，更新填写
	id: string;
	//点赞量
	likeNum: number;
	//转发量
	shareNum: number;
	//修改时间，任何操作都不传，只读
	update_date: string
}



export interface 稿件日志实体 {
	//全局唯一主键，添加时不传，更新填写
	id: string;
	//描述
	note: string;
	//状态
	state: string;
	//操作的用户
	username: string
}



export interface 素材信息 {
	//素材id
	contentId: string;
	//文件GUID
	fileguid: string;
	//关键帧
	keyframe: string;
	//素材类型 1：图片，2：视频，3：音频
	materialType: number;
	//素材地址
	url: string
}



export interface 自定义字段实体 {
	//字段Code
	code: string;
	//默认值
	defaultValue: string;
	//字段扩展信息
	extend: 扩展属性;
	//是否必填 1：必填 0 不必填
	must: number;
	//显示名
	name: string;
	//稿件类型，哪些稿件类型下显式此字段。1表示图文，5表示视频
	showType: Array<number>;
	//字段类型对应的含义，文本框,文本域,下拉框,树形下拉框,时间选择器,标签
	type: TypeEnum
}



export interface 自定义字段实体1 {
	//字段Code
	code: string;
	//默认值
	defaultValue: string;
	//字段扩展信息
	extend: 扩展属性_1;
	//是否必填 1：必填 0 不必填
	must: number;
	//显示名
	name: string;
	//稿件类型，哪些稿件类型下显式此字段。1表示图文，5表示视频
	showType: Array<number>;
	//字段类型对应的含义，文本框,文本域,下拉框,树形下拉框,时间选择器,标签
	type: TypeEnum
}



export interface 自定字段信息 {
	//字段code
	code: string;
	//字段值，所有类型都用字符串，如果遇到存储数组或者对象的值，使用json字符串化传递
	value: object
}



export interface 账号实体 {
	//帐号昵称
	accountName: string;
	//渠道支持的稿件类型，1图文，5视频
	articleTypes: Array<number>;
	//渠道id
	channelId: string;
	//应用id
	clientId: string;
	//应用密钥
	clientSecret: string;
	//创建时间，任何操作都不传，只读
	create_date: string;
	//账号是否过期， 1 表示过期，0表示正常
	expired: number;
	//扩展配置
	extend: object;
	//帐号头像
	headImg: string;
	//全局唯一主键，添加时不传，更新填写
	id: string;
	//平台名称
	platName: string;
	//令牌
	token: string;
	//修改时间，任何操作都不传，只读
	update_date: string
}

export enum TypeEnum {
	TEXT_CHECK = `TEXT_CHECK`,
	TITLE_GENERATE = `TITLE_GENERATE`,
	TITLE_EXTRACTION = `TITLE_EXTRACTION`,
	TEXT_AUDIT = `TEXT_AUDIT`,
	IMAGE_AUDIT = `IMAGE_AUDIT`,
	VIDEO_AUDIT = `VIDEO_AUDIT`,
	SUMMARY = `SUMMARY`,
	CLASS = `CLASS`,
	TAG = `TAG`,
	TRANSLATE = `TRANSLATE`
}



export enum NodeTypeEnum {
	STARTNODE = `STARTNODE`,
	ENDNODE = `ENDNODE`,
	ACTIONNODE = `ACTIONNODE`,
	STEPNODE = `STEPNODE`
}



export enum InstanceStatusEnum {
	START = `START`,
	RUNNING = `RUNNING`,
	RETURN = `RETURN`,
	END = `END`
}



export enum LangEnum {
	zh_CN = `zh_CN`,
	en_US = `en_US`
}

/**
 * 查询详情,伴随着审核信息和账号列表
 * @param id 稿件id 65ba832afbbf4d259241758cf0e48771
 * @param authorization 认证信息token undefined
 * @param lang 国际化 undefined
 */
export async function getArticle(id?: string, authorization?: string, lang?: LangEnum) {
	return request<稿件实体_1>(`/articleeditor/api/v1/article`, {
		method: 'get', 
		params: {
			id, 
		}
	});
}

/**
 * 版本比较
 * @param fid 版本id1 aea4b993d6bd7346a96f40feeecea67a
 * @param sid 版本id2 aea4b993d6bd7346a96f40feeecea67a
 * @param authorization 认证信息token undefined
 * @param lang 国际化 undefined
 */
export async function postCompare(fid?: string, sid?: string, authorization?: string, lang?: LangEnum) {
	return request<版本比较结果>(`/articleeditor/api/v1/article-history/compare`, {
		method: 'post', 
		params: {
			fid, 
			sid, 
		}
	});
}

/**
 * 查询版本详情
 * @param id 版本id aea4b993d6bd7346a96f40feeecea67a
 * @param authorization 认证信息token undefined
 * @param lang 国际化 undefined
 */
export async function getDetailById(id?: string, authorization?: string, lang?: LangEnum) {
	return request<ArticleHistoryVO>(`/articleeditor/api/v1/article-history/detail/${id}`, {
		method: 'get', 
	});
}

/**
 * 备注版本
 * @param id 版本id aea4b993d6bd7346a96f40feeecea67a
 * @param mark 备注信息 内容过时了..
 * @param authorization 认证信息token undefined
 * @param lang 国际化 undefined
 */
export async function putRemarkById(id?: string, mark?: string, authorization?: string, lang?: LangEnum) {
	return request<状态信息>(`/articleeditor/api/v1/article-history/remark/${id}`, {
		method: 'put', 
		params: {
			mark, 
		}
	});
}

/**
 * 查询版本列表
 * @param id 稿件id 65ba832afbbf4d259241758cf0e48771
 * @param authorization 认证信息token undefined
 * @param lang 国际化 undefined
 */
export async function getArticleHistoryById(id?: string, authorization?: string, lang?: LangEnum) {
	return request<Array<ArticleHistoryVO>>(`/articleeditor/api/v1/article-history/${id}`, {
		method: 'get', 
	});
}

/**
 * 操作记录
 * @param id 稿件id 65ba832afbbf4d259241758cf0e48771
 * @param authorization 认证信息token undefined
 * @param lang 国际化 undefined
 */
export async function getId(id?: string, authorization?: string, lang?: LangEnum) {
	return request<Array<稿件日志实体>>(`/articleeditor/api/v1/article-log`, {
		method: 'get', 
		params: {
			id, 
		}
	});
}

/**
 * 推送稿件
 * @param authorization 认证信息token undefined
 * @param articlePluginVo articlePluginVO undefined
 * @param lang 国际化 undefined
 */
export async function postArticlePlugin(articlePluginVo: 插件稿件信息, authorization?: string, lang?: LangEnum) {
	return request<Array<string>>(`/articleeditor/api/v1/article-plugin`, {
		method: 'post', 
		data: {
			articlePluginVo, 
		}
	});
}

/**
 * 我的审核任务稿件列表
 * @param endTime 创建结束时间 2021-04-14
 * @param instanceStatus 流程状态 RUNNING
 * @param pageNum 页码，0表示查询所有 1
 * @param pageSize 每页个数，0表示查询所有 20
 * @param sort 排序方式 desc：倒叙 asc：正序 desc
 * @param sortBy 排序字段 update_date
 * @param startTime 创建开始时间 2021-04-13
 * @param title 标题 xxx
 * @param authorization 认证信息token undefined
 * @param lang 国际化 undefined
 */
export async function getList(endTime?: string, instanceStatus?: InstanceStatusEnum, pageNum?: string, pageSize?: string, sort?: string, sortBy?: string, startTime?: string, title?: string, authorization?: string, lang?: LangEnum) {
	return request<分页信息«Article,稿件实体»>(`/articleeditor/api/v1/article-wkf/audit/list`, {
		method: 'get', 
		params: {
			endTime, 
			instanceStatus, 
			pageNum, 
			pageSize, 
			sort, 
			sortBy, 
			startTime, 
			title, 
		}
	});
}

/**
 * 驱动审核流程
 * @param id 稿件id 65ba832afbbf4d259241758cf0e48771
 * @param authorization 认证信息token undefined
 * @param lang 国际化 undefined
 * @param workFlowDriveVo workFlowDriveVO undefined
 */
export async function postDriveById(workFlowDriveVo: 流程驱动请求体, id?: string, authorization?: string, lang?: LangEnum) {
	return request<流程单次的执行信息>(`/articleeditor/api/v1/article-wkf/drive/${id}`, {
		method: 'post', 
		data: {
			workFlowDriveVo, 
		}
	});
}

/**
 * 批量删除稿件
 * @param authorization 认证信息token undefined
 * @param idList idList undefined
 * @param lang 国际化 undefined
 */
export async function deleteBatchDelete(idList: undefined, authorization?: string, lang?: LangEnum) {
	return request<状态信息>(`/articleeditor/api/v1/article/batch-delete`, {
		method: 'delete', 
		data: {
			idList, 
		}
	});
}

/**
 * 批量添加或者更新稿件，如果没有传id则是新增，否则更新 
 * @param authorization 认证信息token undefined
 * @param articleVoList articleVOList undefined
 * @param lang 国际化 undefined
 */
export async function postBatchSave(articleVoList: undefined, authorization?: string, lang?: LangEnum) {
	return request<Array<string>>(`/articleeditor/api/v1/article/batchSave`, {
		method: 'post', 
		data: {
			articleVoList, 
		}
	});
}

/**
 * 查询子稿带正文等详细信息列表，伴随着渠道和审核信息和账号列表
 * @param id 父稿id 65ba832afbbf4d259241758cf0e48771
 * @param authorization 认证信息token undefined
 * @param lang 国际化 undefined
 */
export async function getChildDetailById(id?: string, authorization?: string, lang?: LangEnum) {
	return request<Array<稿件实体_1>>(`/articleeditor/api/v1/article/child-detail/${id}`, {
		method: 'get', 
	});
}

/**
 * 查询子稿列表，伴随着账号列表
 * @param id 父稿id 65ba832afbbf4d259241758cf0e48771
 * @param authorization 认证信息token undefined
 * @param lang 国际化 undefined
 */
export async function getChildById(id?: string, authorization?: string, lang?: LangEnum) {
	return request<Array<稿件实体_1>>(`/articleeditor/api/v1/article/child/${id}`, {
		method: 'get', 
	});
}

/**
 * 下载稿件数据
 * @param accountId 发布账号id 6488c1474eaf45d9818dce0b36c35918
 * @param channelId 渠道id 6488c1474eaf45d9818dce0b36c35918
 * @param creator 创建人code 6488c1474eaf45d9818dce0b36c35918
 * @param endTime 创建结束时间 2021-04-14
 * @param publishEndTime 发布结束时间 2021-04-14
 * @param publishStartTime 发布开始时间 2021-04-13
 * @param sort 排序方式 desc：倒叙 asc：正序 desc
 * @param sortBy 排序字段 create_date
 * @param startTime 创建开始时间 2021-04-13
 * @param status 状态，-10 回收站 0 初稿/草稿 10 审核中 30 推送中 40 推送完成 50 推送失败 60 审核退回 70 审核通过 0
 * @param title 标题 test
 * @param type 稿件类型，1图文 2图片 5视频 7社交媒体 1
 * @param authorization 认证信息token undefined
 * @param lang 国际化 undefined
 */
export async function getDownloadList(accountId?: string, channelId?: string, creator?: string, endTime?: string, publishEndTime?: string, publishStartTime?: string, sort?: string, sortBy?: string, startTime?: string, status?: string, title?: string, type?: string, authorization?: string, lang?: LangEnum) {
	return request(`/articleeditor/api/v1/article/download-list`, {
		method: 'get', 
		params: {
			accountId, 
			channelId, 
			creator, 
			endTime, 
			publishEndTime, 
			publishStartTime, 
			sort, 
			sortBy, 
			startTime, 
			status, 
			title, 
			type, 
		}
	});
}

/**
 * 稿件入库
 * @param id 稿件id 65ba832afbbf4d259241758cf0e48771
 * @param authorization 认证信息token undefined
 * @param lang 国际化 undefined
 */
export async function postLibById(id?: string, authorization?: string, lang?: LangEnum) {
	return request<内容库id>(`/articleeditor/api/v1/article/lib/${id}`, {
		method: 'post', 
	});
}

/**
 * 查询稿件列表，只有账号信息，不带渠道信息
 * @param accountId 发布账号id 6488c1474eaf45d9818dce0b36c35918
 * @param channelId 渠道id 6488c1474eaf45d9818dce0b36c35918
 * @param creator 创建人code 6488c1474eaf45d9818dce0b36c35918
 * @param endTime 创建结束时间 2021-04-14
 * @param pageNum 页码，0表示查询所有 1
 * @param pageSize 每页个数，0表示查询所有 10
 * @param publishEndTime 发布结束时间 2021-04-14
 * @param publishStartTime 发布开始时间 2021-04-13
 * @param sort 排序方式 desc：倒叙 asc：正序 desc
 * @param sortBy 排序字段 create_date
 * @param startTime 创建开始时间 2021-04-13
 * @param status 状态，-10 回收站 0 初稿/草稿 10 审核中 30 推送中 40 推送完成 50 推送失败 60 审核退回 70 审核通过 0
 * @param title 标题 test
 * @param type 稿件类型，1图文 2图片 5视频 7社交媒体 1
 * @param authorization 认证信息token undefined
 * @param lang 国际化 undefined
 */
export async function getList(accountId?: string, channelId?: string, creator?: string, endTime?: string, pageNum?: string, pageSize?: string, publishEndTime?: string, publishStartTime?: string, sort?: string, sortBy?: string, startTime?: string, status?: string, title?: string, type?: string, authorization?: string, lang?: LangEnum) {
	return request<分页信息«Article,稿件实体»>(`/articleeditor/api/v1/article/list`, {
		method: 'get', 
		params: {
			accountId, 
			channelId, 
			creator, 
			endTime, 
			pageNum, 
			pageSize, 
			publishEndTime, 
			publishStartTime, 
			sort, 
			sortBy, 
			startTime, 
			status, 
			title, 
			type, 
		}
	});
}

/**
 * 删除稿件，放入回收站
 * @param id 稿件id 65ba832afbbf4d259241758cf0e48771
 * @param authorization 认证信息token undefined
 * @param lang 国际化 undefined
 */
export async function deleteRecycleById(id?: string, authorization?: string, lang?: LangEnum) {
	return request<状态信息>(`/articleeditor/api/v1/article/recycle/${id}`, {
		method: 'delete', 
	});
}

/**
 * 恢复稿件
 * @param id 稿件id 65ba832afbbf4d259241758cf0e48771
 * @param authorization 认证信息token undefined
 * @param lang 国际化 undefined
 */
export async function putResumeById(id?: string, authorization?: string, lang?: LangEnum) {
	return request<状态信息>(`/articleeditor/api/v1/article/resume/${id}`, {
		method: 'put', 
	});
}

/**
 * 爬取微信文章链接内容
 * @param url 文章链接 https://mp.weixin.qq.com/s/472xHPoCtmyeF16hhHd8qQ
 * @param authorization 认证信息token undefined
 * @param lang 国际化 undefined
 */
export async function getWxArticleDetail(url?: string, authorization?: string, lang?: LangEnum) {
	return request<微信爬取返回体>(`/articleeditor/api/v1/article/wx-article-detail`, {
		method: 'get', 
		params: {
			url, 
		}
	});
}

/**
 * 删除稿件
 * @param id 稿件id 65ba832afbbf4d259241758cf0e48771
 * @param authorization 认证信息token undefined
 * @param lang 国际化 undefined
 */
export async function deleteId(id?: string, authorization?: string, lang?: LangEnum) {
	return request<状态信息>(`/articleeditor/api/v1/article`, {
		method: 'delete', 
		params: {
			id, 
		}
	});
}

/**
 * 稿件推送回调
 * @param authorization 认证信息token undefined
 * @param callbackVo callbackVO undefined
 * @param lang 国际化 undefined
 */
export async function postCallback(callbackVo: CallBackVO, authorization?: string, lang?: LangEnum) {
	return request<Article>(`/articleeditor/api/v1/push/callback`, {
		method: 'post', 
		data: {
			callbackVo, 
		}
	});
}

/**
 * 发起一稿多发推送
 * @param parentId 父稿的id 65ba832afbbf4d259241758cf0e48771
 * @param authorization 认证信息token undefined
 * @param lang 国际化 undefined
 */
export async function postChildByParentId(parentId?: string, authorization?: string, lang?: LangEnum) {
	return request<状态信息>(`/articleeditor/api/v1/push/child/${parentId}`, {
		method: 'post', 
	});
}

/**
 * 稿件推送
 * @param id 稿件id 65ba832afbbf4d259241758cf0e48771
 * @param authorization 认证信息token undefined
 * @param lang 国际化 undefined
 */
export async function postPushById(id?: string, authorization?: string, lang?: LangEnum) {
	return request<状态信息>(`/articleeditor/api/v1/push/${id}`, {
		method: 'post', 
	});
}