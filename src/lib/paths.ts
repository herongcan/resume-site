/**
 * 站点路径工具：统一处理 base，兼容 Cloudflare Pages（/）与 GitHub Pages（/resume-site/）
 */
const rawBase = import.meta.env.BASE_URL;

/** 去掉末尾斜杠的 base，根路径时为空串 */
export const base = rawBase.replace(/\/+$/, '');

/** 把站内路径转成带 base 的可用链接 */
export const url = (path: string, hash?: string): string => {
  const p = path.startsWith('/') ? path : `/${path}`;
  const withBase = p === '/' ? `${base}/` : `${base}${p}`;
  return hash ? `${withBase}#${hash}` : withBase;
};

/** 首页某个锚点（用于子页面回跳） */
export const homeAnchor = (id: string): string => url('/', id);

/** 静态资源（public 下）路径 */
export const asset = (path: string): string => `${base}/${path.replace(/^\/+/, '')}`;
