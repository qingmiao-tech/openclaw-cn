/**
 * Lightweight i18n module for OpenClaw WebUI.
 * Supports English (en) and Simplified Chinese (zh).
 */

export type Locale = "en" | "zh";

const zh: Record<string, string> = {
  // Navigation groups
  "Chat": "聊天",
  "Control": "控制台",
  "Agent": "智能体",
  "Settings": "设置",
  "Resources": "资源",

  // Tab titles
  "Agents": "智能体",
  "Overview": "概览",
  "Channels": "渠道",
  "Instances": "实例",
  "Sessions": "会话",
  "Usage": "用量",
  "Cron Jobs": "定时任务",
  "Skills": "技能",
  "Nodes": "节点",
  "Config": "配置",
  "Debug": "调试",
  "Logs": "日志",
  "Docs": "文档",

  // Tab subtitles
  "Manage agent workspaces, tools, and identities.": "管理智能体工作区、工具和身份。",
  "Gateway status, entry points, and a fast health read.": "网关状态、入口和健康检查。",
  "Manage channels and settings.": "管理渠道和设置。",
  "Presence beacons from connected clients and nodes.": "已连接客户端和节点的在线状态。",
  "Inspect active sessions and adjust per-session defaults.": "查看活跃会话并调整会话默认值。",
  "Schedule wakeups and recurring agent runs.": "调度唤醒和定期智能体运行。",
  "Manage skill availability and API key injection.": "管理技能可用性和 API 密钥注入。",
  "Paired devices, capabilities, and command exposure.": "已配对设备、能力和命令暴露。",
  "Direct gateway chat session for quick interventions.": "直连网关聊天会话，用于快速交互。",
  "Edit ~/.openclaw/openclaw.json safely.": "安全编辑 ~/.openclaw/openclaw.json。",
  "Gateway snapshots, events, and manual RPC calls.": "网关快照、事件和手动 RPC 调用。",
  "Live tail of the gateway file logs.": "实时查看网关日志。",

  // Top bar
  "Gateway Dashboard": "网关控制台",
  "Health": "健康",
  "OK": "正常",
  "Offline": "离线",
  "Expand sidebar": "展开侧栏",
  "Collapse sidebar": "收起侧栏",

  // Chat view
  "Send": "发送",
  "Stop": "停止",
  "Queue": "排队",
  "New session": "新会话",
  "Compaction": "压缩",
  "Add a message or paste more images...": "输入消息或粘贴图片…",
  "Message (↩ to send, Shift+↩ for line breaks, paste images)": "输入消息（↩ 发送，Shift+↩ 换行，可粘贴图片）",
  "Connect to the gateway to start chatting…": "连接网关后开始聊天…",
  "Disconnected from gateway.": "已断开网关连接。",
  "Exit focus mode": "退出专注模式",
  "Remove attachment": "移除附件",
  "Attachment preview": "附件预览",
  "Remove queued message": "移除排队消息",

  // Overview
  "Connected": "已连接",
  "Disconnected": "已断开",
  "Enabled": "已启用",
  "Disabled": "已禁用",
  "Click Connect to apply connection changes": "点击连接以应用连接更改",

  // Common actions
  "Save": "保存",
  "Cancel": "取消",
  "Apply": "应用",
  "Delete": "删除",
  "Edit": "编辑",
  "Add": "添加",
  "Remove": "移除",
  "Close": "关闭",
  "Refresh": "刷新",
  "Copy": "复制",
  "Reset": "重置",
  "Confirm": "确认",
  "Back": "返回",
  "Next": "下一步",
  "Loading...": "加载中…",
  "Error": "错误",
  "Success": "成功",
  "Warning": "警告",
  "None": "无",
  "All": "全部",
  "Clear": "清除",
  "Search": "搜索",
  "Filter": "筛选",

  // Sessions
  "Actions": "操作",
  "Active": "活跃",

  // Channels
  "Channel health": "渠道健康",
  "Channel status snapshots from the gateway": "来自网关的渠道状态快照",
  "Channel status and configuration": "渠道状态和配置",

  // Config
  "All Settings": "所有设置",

  // Cron
  "Add job": "添加任务",
  "All scheduled jobs stored in the gateway": "网关中存储的所有定时任务",
  "Agent ID": "智能体 ID",
  "Agent message": "智能体消息",
  "Agent turn": "智能体轮次",
  "Channel": "渠道",

  // Usage
  "Activity by Time": "按时间活动",
  "Ascending": "升序",
  "Descending": "降序",
  "Close session details": "关闭会话详情",
  "Collapse": "折叠",
  "Collapse All": "全部折叠",
  "Expand All": "全部展开",
  "Assistant": "助手",
  "Assistant output tokens": "助手输出 Token",
  "Average cost per message when providers report costs": "提供商报告费用时的每条消息平均成本",
  "Average tokens per message in this range": "此范围内每条消息的平均 Token",
  "Base context per message": "每条消息的基础上下文",

  // Language
  "Language": "语言",
  "English": "English",
  "中文": "中文",
};

let currentLocale: Locale = "en";

export function setLocale(locale: Locale) {
  currentLocale = locale;
}

export function getLocale(): Locale {
  return currentLocale;
}

/**
 * Translate a string. Returns the Chinese translation if locale is "zh",
 * otherwise returns the original string.
 */
export function t(key: string): string {
  if (currentLocale === "zh") {
    return zh[key] ?? key;
  }
  return key;
}
