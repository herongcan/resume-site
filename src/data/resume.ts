/**
 * 站点数据源 v0.5 —— 对齐 2026-11-27 版投递简历
 *
 * 数据来源：/Users/herc/Desktop/简历/11.27/何荣璨-高级Java后端-简历.md
 *   头部定调：8 年 Java 后端与微服务｜专注平台研发 / 流程编排 / 系统集成
 *   期望岗位：高级 Java 后端工程师（平台研发）· 深圳｜统招本科
 *   工作经历：2021.10 – 至今
 *
 * v0.5 三项拍板（2026-11-27）：
 *   1. 在职时间改为「2021.10-至今」，废弃 2026.08 离职口径
 *   2. 「风控」解禁：项目标题用「租赁风控决策平台」、角色用「Java 后端（风控方向）」
 *   3. 数字口径完全跟随简历：删「20+ 数据源」「2 个 fix PR」，规则数由「上百条」改「数百条」
 *
 * 改写原则：
 *   1. 只做语言重组，不新增任何事实与数字
 *   2. 不升级动词力度（原文「参与」不改「主导」）
 *   3. 不引入原文没有的机制名词
 *
 * 颗粒度：详情页允许比 2 页简历更细（项目多出的要点、能力迁移、全栈交付等为站点独有）
 */

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  period: string;
  stack: string[];
  summary: string;
  highlights: { title: string; body: string }[];
  value: string[];
  links?: ProjectLink[];
  featured: boolean;
}

export interface SkillGroup {
  group: string;
  items: string[];
  weight: number;
  proof: string;
}

export const meta = {
  version: 'v0.5',
  updatedAt: '2026-11-27',
  positioning: 'primary-backend / secondary-fullstack',
  source: '何荣璨-高级Java后端-简历.md（2026-11-27 版，2 页）',
};

export const profile = {
  name: '何荣璨',
  /** Hero 主标题：A 案（未变） */
  headline: '8 年 Java 后端，把系统从设计做到交付',
  /**
   * Hero 断行提示：仅用于视觉排版，不改文案。
   * 避免在中文字词中间断行（例如「架 / 构设计」），两行字数接近、视觉更稳。
   */
  headlineLines: ['8 年 Java 后端，把系统', '从设计做到交付'],
  /** 副标题：与新版简历头部定调完全一致（2026-11-27 用户要求去掉「Vue/Angular 管理后台可独立交付」） */
  subline: '8 年 Java 后端与微服务 · 专注平台研发、流程编排与系统集成',

  title: '高级 Java 后端工程师',
  /** 头部定调三标签（新版） */
  titleTags: ['平台研发', '流程编排', '系统集成'],
  titleTagsAlt: ['平台研发', '微服务架构', '全栈交付'],

  /** 新版新增字段 */
  expectRole: '高级 Java 后端工程师（平台研发）',
  expectCity: '深圳',

  years: 8,
  location: '深圳',
  email: 'herc888888@gmail.com',
  github: 'github.com/herongcan',
  phone: '13823727972',

  /**
   * 在职状态：仍不在站点展示。2026-11-27 起工作经历时间为「2021.10-至今」，
   * 站点不额外加「在职 / 看机会」字样。
   */
  status: '',

  /**
   * Hero / 页脚的主 CTA 只放邮箱 + GitHub，避免手机号进入首屏。
   * 手机号仍保留在 profile.phone，供 /resume 页展示（可随投递需要随时关掉）。
   */
  preferContact: ['email', 'github'] as const,
  phoneOnPublicSite: true,
};

export const education = {
  school: '广东石油化工学院',
  degree: '统招本科',
  /**
   * 专业名称：有意省略（非科班，不作为展示项，避免成为减分信息）。
   * 页面渲染时该字段缺失则不输出分隔符，呈现为「广东石油化工学院 · 统招本科 · 2014-2018」。
   */
  period: '2014-2018',
  extra: 'CET-4',
};

export const links = {
  github: 'https://github.com/herongcan',
  clsNewsRepo: 'https://github.com/herongcan/cls-news',
  clsNewsDemo: 'https://news.herongcan.icu/',
  freemailUpstream: 'https://github.com/idinging/freemail',
  freemailDemo: 'https://freemail.herc888888.workers.dev/',
  bossJobRepo: 'https://github.com/herongcan/boss-job-fetch',
  bossJobStore:
    'https://chromewebstore.google.com/detail/dniigiffebffjhcpbmjpcljbffhogbmp',
  // TODO(确认): 掘金 / CSDN / 知乎 / 公众号
};

/** 个人优势：按 2026-11-24 版三条整段替换 */
export const advantages = [
  {
    title: '资深后端与工程架构',
    body: '具备 8 年 Java 后端与微服务研发经验，擅长微服务拆分、接口设计、数据建模；具备上线治理与管理后台全栈交付能力。',
  },
  {
    title: '复杂业务与平台能力',
    body: '具备长链路任务、多场景路由、多渠道触达的系统建设经验；擅长通过配置驱动流程编排，支撑多元业务场景快速扩展。',
  },
  {
    title: '稳定性与工程治理',
    body: '擅长线程池异步、批量任务、MQ 异步解耦、分布式锁、CAS 与补偿机制等稳定性治理，能在多任务、异步与状态推进场景下保障数据一致性与交付质量。',
  },
];

/** 技能分组：规则与流程组按新版简化；后两组由个人项目补充 */
export const skills: SkillGroup[] = [
  {
    group: '语言与框架',
    items: [
      'Java',
      'Spring Boot',
      'Spring Cloud',
      'Nacos',
      'OpenFeign',
      'Gateway',
      'Spring MVC',
      'MyBatis-Plus',
    ],
    weight: 0.95,
    proof: '俏租机、icore 银行核心、粮情云等项目的后端主语言与框架',
  },
  {
    group: '架构与分布式',
    items: ['微服务拆分', '分布式锁', '缓存', '消息队列', 'RESTful API', '接口治理与幂等设计'],
    weight: 0.92,
    proof: '俏租机微服务拆分与接口治理、icore 分布式锁、租后作业平台 MQ 异步落库',
  },
  {
    group: '规则与流程',
    items: ['规则引擎', '任务治理', '流程编排', '幂等重试'],
    weight: 0.9,
    proof: 'URule + SpEL 配置化规则链路、多供应商策略路由与任务流转',
  },
  {
    group: '数据与中间件',
    items: ['MySQL', 'Redis', 'RabbitMQ', 'XXL-Job', 'Nginx', 'Zookeeper'],
    weight: 0.85,
    proof: '额度冻结模块查询优化、任务调度、分布式锁与缓存实践',
  },
  {
    group: '工程化',
    items: ['Maven', 'Git', 'Jenkins（CI/CD）', 'Linux', 'Docker', 'GitHub Actions'],
    weight: 0.8,
    proof: 'cls-news 的 Docker + CI 自动发布；粮情云 Jenkins 部署',
  },
  {
    group: '管理后台交付',
    items: ['Angular', 'Vue', 'JavaScript', 'TypeScript', 'Ng-Alain', 'Ng-Zorro', 'Element UI'],
    /** 2026-11-24 用户拍板：0.6 → 0.9（后台能独立交付，不该被压到及格线附近） */
    weight: 0.9,
    proof: 'Angular、Vue 等的前端开发实践',
  },
  {
    group: 'AI 应用',
    items: ['DeepSeek API', 'LLM 调用封装', '失败重试与并发去重'],
    weight: 0.55,
    proof: 'cls-news 接入 DeepSeek 做利好/利空分析',
  },
  {
    group: '边缘与 Serverless',
    items: ['Cloudflare Workers', 'D1', 'R2'],
    weight: 0.45,
    proof: 'freemail 二次开发，向 upstream 提交并合并 fix PR',
  },
];

export const experiences = [
  {
    /** 页面显示用：品牌名（工商主体见 companyLegal，页面不展示，投递 PDF / 背调时提供） */
    company: '俏租机',
    companyLegal: '深圳市租享生活科技有限公司',
    role: '高级后端工程师',
    period: '2021.10-至今',
    points: [
      '负责 3C 租赁平台租前准入、租中履约、租后处置的规则决策与数据接入，服务支付宝/京东/抖音三端。',
      '负责规则链路与多源数据接入的平台化落地，支撑多场景按配置交付、新数据源按适配层扩展。',
      '建设多供应商触达与租中、租后作业体系，覆盖多家短信、智能语音渠道，支撑还款提醒、催收与法诉全流程。',
      '参与需求评审、方案评估与跨部门联调，配合产品、渠道与三方供应商完成上线验收；沉淀统一接入与配置化规范供后续场景复用。',
    ],
  },
  {
    company: '长亮科技',
    companyLegal: '深圳市长亮科技股份有限公司',
    role: 'Java 后端工程师',
    period: '2020.05-2021.09',
    points: [
      '在 Spring Cloud 微服务架构下参与海外银行核心系统 icore 3.0 营销中心研发，负责活动、奖励模块，基于 Redis 分布式锁保障奖励发放的并发一致性。',
      '参与额度子系统优化，负责额度冻结/解冻模块与查询 SQL 优化，支撑 Web/App 双端额度流程；在多人敏捷团队中参与跨子系统评审、Code Review 与线上问题定位。',
    ],
  },
  {
    company: '中软易通',
    companyLegal: '深圳市中软易通科技有限公司',
    role: 'Java 后端开发（兼 Vue 前端）',
    period: '2018.07-2020.05',
    points: [
      '参与数据平台、B2B 电商、数据展示与公众号多条业务线的研发，负责核心模块设计、接口实现与上线交付。',
      '基于 Vue + Element UI + Spring Boot 构建前后端分离的管理平台，交付报表、基础配置与告警模块；基于 SSM + Shiro 参与权限、订单、大屏与 SSO 多系统集成。',
    ],
  },
];

export const projects: Project[] = [
  {
    slug: 'qiaozuji-platform',
    title: '俏租机 租赁风控决策平台',
    tagline: '规则决策、三方数据接入与任务流治理',
    role: 'Java 后端（风控方向）',
    period: '2021.10-至今',
    stack: [
      'Spring Cloud',
      'Nacos',
      'OpenFeign',
      'Gateway',
      'RabbitMQ',
      'Redis',
      'MySQL',
      'MyBatis-Plus',
      'XXL-Job',
      'Docker',
      'URule',
      'SpEL',
      'Angular',
    ],
    summary:
      '面向 3C 租赁租前准入的风控决策平台，覆盖规则决策、三方数据接入、审批任务流与反欺诈预警，服务支付宝/京东/抖音多端渠道。我负责规则决策链路与三方数据接入的后端研发，从需求拆解、接口设计覆盖到数据流转与上线验收。',
    highlights: [
      {
        title: '动态决策架构',
        body: '基于 URule + SpEL + 策略工厂构建配置化决策链路，落地数百条规则，支撑任务多场景路由、规则结果回流与业务幂等；新场景以配置交付，不改主流程。',
      },
      {
        title: '三方数据接入',
        body: '设计统一接入层适配多类数据源，沉淀调用记录复用、失败降级与特征标准化；新增数据源按场景配置扩展，减少重复适配。',
      },
      {
        title: '任务流与治理',
        body: '参与多类型任务流与审批能力建设，结合 MQ 自产自销、分布式锁串行与乐观锁版本号保障任务状态可靠推进；通过失败重试兜底。',
      },
      {
        title: '规则决策后台交付',
        body: '参与 Angular 规则决策后台开发，交付工单、配置类页面并实现 ACL 权限控制，完成前后端联调与上线验收。',
      },
      {
        title: '多端协同',
        body: '参与支付宝/京东/抖音多端渠道的规则链路适配与联调，支撑多端业务协同迭代。',
      },
    ],
    value: [
      '规则配置化替代硬编码，多场景上线不再依赖整体发版。',
      '统一接入多类数据源，降低适配成本，提升接入复用率。',
      '平台累计注册用户超千万，支撑多端交易与履约业务持续运行。',
      '能力可迁移：规则配置、外部能力接入、任务流/审批、状态推进与幂等、管理后台交付等经验，可迁移至电商、SaaS、物流供应链、制造、企业服务等复杂业务系统。',
    ],
    featured: true,
  },
  {
    slug: 'qiaozuji-operation',
    title: '俏租机租后作业与法诉平台',
    tagline: '任务运营、触达治理与法诉调解',
    role: 'Java 后端',
    period: '2021.10-2024.12',
    stack: [
      'Spring Cloud',
      'XXL-Job',
      'RabbitMQ',
      'Redis',
      'MySQL',
      'MyBatis-Plus',
      '策略模式',
      'Angular',
      'Ng-Zorro',
    ],
    summary:
      '租后作业平台，覆盖催收任务生成与分配、短信与智能外呼触达、停复催、投诉、线下还款，以及法诉与调解。后端链路与作业管理后台都由我参与交付。',
    highlights: [
      {
        title: '任务运营',
        body: '负责催收任务生成、按逾期阶段/任务等级/人员负载自动分案、月初重分配、任务等级提升与流转记录。',
      },
      {
        title: '触达治理',
        body: '基于策略模式 + 远程配置接入 6 家短信平台、3 家智能外呼平台，支持场景路由、模板配置、批量发送、回执回填与账单同步；通过名单过滤、频控去重、分批发送和 MQ 异步落库保障发送稳定性。',
      },
      {
        title: '停复催与投诉',
        body: '基于策略模式实现投诉停催、线下还款停催与自动复催，结合 MQ 与定时任务推进停催/复催状态。',
      },
      {
        title: '法诉调解',
        body: '参与法诉案件、证据材料、文书模板、用印申请与调解还款计划等模块开发。',
      },
      {
        title: '管理后台交付',
        body: '基于 Angular + Ng-Zorro 交付作业管理后台，覆盖列表/详情、分单配置、审批、质检等页面，负责组件化、ACL 权限与前后端联调。',
      },
    ],
    value: [
      '新增短信/外呼渠道按策略扩展，对接方式由改造降为配置。',
      '支撑任务分配、触达、停复催、投诉与法诉等多环节稳定运行。',
      '能力可迁移：任务分配、状态流转、策略路由、多供应商接入、异步处理等能力，可迁移至客服工单、售后、物流调度、运营作业等平台型系统。',
    ],
    featured: true,
  },
  {
    slug: 'cls-news',
    title: '财经快讯分析助手（cls-news）',
    tagline: '增量采集、瀑布流检索、LLM 分析到 CI 自动发布',
    role: '个人项目 · 独立完成',
    period: '2026',
    stack: ['Spring Boot 3', 'SQLite', 'DeepSeek API', 'Docker', 'GitHub Actions'],
    summary:
      '一个自己从零做完的服务端产品：独立完成技术选型、AI 辅助编码与部署，把采集、检索、模型分析与自动发布整条链路跑通并上线。',
    highlights: [
      {
        title: '增量采集与瀑布流检索',
        body: '设计增量采集与瀑布流检索能力，支持首屏加载、历史翻页与关键词搜索。',
      },
      {
        title: 'LLM 分析链路',
        body: '接入 DeepSeek 做利好/利空分析，支持分析状态、失败重试与并发去重。',
      },
      {
        title: 'CI 自动发布',
        body: '通过 CI 流水线 + Docker 实现自动发布，配合 Cloudflare Tunnel 对外提供服务。',
      },
    ],
    value: ['验证了「后端服务 + 外部 AI 能力 + 自动化交付」可以由一个人完整闭环，且线上可访问。'],
    links: [
      { label: 'GitHub', href: 'https://github.com/herongcan/cls-news' },
      { label: 'Demo', href: 'https://news.herongcan.icu/' },
    ],
    featured: true,
  },
  {
    slug: 'freemail',
    title: '临时邮箱服务（freemail）',
    tagline: '向 1.6k Star 开源项目提交并合并 fix PR',
    role: '开源贡献',
    period: '2026',
    stack: ['Cloudflare Workers', 'D1', 'R2', 'RESTful API'],
    summary:
      '基于 1.6k Star 的开源项目 idinging/freemail 完成二次开发与部署。',
    highlights: [
      {
        title: '开源项目贡献PR',
        body: '向 upstream 提交并合并 fix PR，不是 fork 后改自己的分支。',
      },
      {
        title: 'Serverless 部署实践',
        body: '整套服务跑在 Cloudflare Workers 上，用 D1 存数据、R2 存对象，按 RESTful API 组织接口。',
      },
    ],
    value: ['从使用者变成贡献者：代码进了上游主干。'],
    links: [
      { label: 'Upstream', href: 'https://github.com/idinging/freemail' },
      { label: 'Demo', href: 'https://freemail.herc888888.workers.dev/' },
    ],
    featured: true,
  },
  {
    slug: 'boss-job-fetch',
    title: 'BOSS 岗位采集助手（Chrome 扩展）',
    tagline: '已上架 Chrome 应用商店的浏览器扩展',
    role: '个人项目 · 独立开发并上架',
    period: '2026',
    stack: ['Chrome Extension', 'Content Script', 'Local Storage', 'CSV/JSON'],
    summary:
      '独立开发并上架 Chrome 应用商店；支持列表采集、JD 补全、失败重试/熔断与 CSV/JSON 导出，数据纯本地存储。',
    highlights: [
      {
        title: '采集链路的可用性设计',
        body: '通过内容脚本拦截列表接口、DOM 兜底提取与数据体检三层保障，接口变动后仍能采到数据。',
      },
      {
        title: '失败重试与熔断',
        body: '采集过程支持失败重试与熔断，避免异常场景下无限请求。',
      },
      {
        title: '隐私边界',
        body: '数据只落本地 Local Storage，不上传任何服务器。',
      },
    ],
    value: ['通过 Chrome 应用商店审核并上架。'],
    links: [
      { label: 'GitHub', href: 'https://github.com/herongcan/boss-job-fetch' },
      {
        label: 'Chrome Web Store',
        href: 'https://chromewebstore.google.com/detail/dniigiffebffjhcpbmjpcljbffhogbmp',
      },
    ],
    featured: true,
  },
  {
    slug: 'icore',
    title: 'icore 3.0 海外银行核心系统',
    tagline: '分布式微服务架构下的营销中台与额度模块',
    role: 'Java 后端',
    period: '2020.05-2021.09',
    stack: ['Spring Boot', 'Spring Cloud', 'SpringMVC', 'MyBatis', 'Zookeeper', 'Kafka', 'Redis'],
    summary: '分布式微服务架构下的银行核心系统，我负责营销中台活动奖励与额度冻结模块。',
    highlights: [
      {
        title: '营销中台活动奖励',
        body: '负责活动、奖励模块研发与维护，基于 Redis 分布式锁保障奖励发放的并发一致性。',
      },
      {
        title: '额度冻结模块',
        body: '开发额度冻结/解冻模块并优化查询 SQL，支撑 Web/App 双端额度流程。',
      },
    ],
    value: ['在银行核心系统的交付节奏下完成了并发控制与 SQL 优化的实战。'],
    featured: false,
  },
];

export const minorProjects = [
  {
    title: '粮情云数据平台',
    period: '2019.06-2020.04',
    role: 'Java 后端 / 管理后台交付（Vue）',
    stack: ['Vue', 'Element UI', 'Spring Boot', 'MyBatis', 'Nginx', 'Redis'],
    summary:
      '交付报表、配置、告警模块与 WebSocket 实时测温；前端基于 Vue + Element UI 做图表、导出、异步渲染与在线预览/打印。',
  },
  {
    title: 'B2B 电商 / 数据大屏 / 公众号',
    period: '2018.07-2020.04',
    role: 'Java 后端开发（兼 Vue 前端）',
    stack: ['SSM', 'Shiro', 'Layui', 'Vue', 'MySQL'],
    summary: '负责订单、权限、大屏与 SSO 接入，参与数据库设计文档、产品部署与版本迭代。',
  },
];

/** 能力可迁移：面向跨行业投递，站点单独成节 */
export const capabilityMigration = [
  {
    capabilities: ['规则配置', '外部能力接入', '任务流/审批', '状态推进与幂等', '管理后台交付'],
    scenarios: '电商、SaaS、物流供应链、制造、企业服务等复杂业务系统',
  },
  {
    capabilities: ['任务分配', '状态流转', '策略路由', '多供应商接入', '异步处理'],
    scenarios: '客服工单、售后、物流调度、运营作业等平台型系统',
  },
];

/** 管理后台交付：次线能力的独立展示区，放在技能一节之后 */
export const fullstackDeliveries = [
  'Angular + Ng-Zorro：规则决策后台、租后作业管理平台（列表/详情、分单配置、审批、质检）',
  'Vue + Element UI：数据管理平台报表、基础配置、告警模块（图表、导出、在线预览/打印）',
  '前后端联调与 ACL 权限控制、SSO 多系统接入、大屏展示',
  '能承担「Java 接口 + MySQL 建模 + 管理后台」的端到端交付',
];

/** 简历已删除此节，站点保留用于 /about 页收尾 */
export const techSummary = [
  {
    title: '复杂业务与平台经验',
    body: '多端交易/履约、规则决策、租后作业 + 银行核心系统；熟悉状态流转、规则配置、三方协同与数据标准化，能力可迁移至电商、SaaS、物流供应链、制造、企业服务等场景。',
  },
  {
    title: '平台与架构',
    body: '配置化规则链路、多源数据接入、多供应商触达、任务流/审批、名单与预警；具备微服务拆分、接口治理与可扩展接入设计经验。',
  },
  {
    title: '稳定性与交付',
    body: 'Redis 分布式锁、MQ 消息处理、任务版本号保障状态推进、失败处理与幂等；具备 Vue/Angular 管理后台 + Java 接口 + MySQL 的端到端交付能力，能承担需求拆解、方案评估、跨部门联调与上线交付。',
  },
];
