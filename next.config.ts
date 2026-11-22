import type { NextConfig } from 'next';
const config: NextConfig = { ...(process.env.STATIC_PREVIEW === '1' ? {output:'export' as const, images:{unoptimized:true}} : {}), poweredByHeader:false };
export default config;
