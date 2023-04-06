import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface AXRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface AXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: AXRequestInterceptors<T>
  showLoading?: boolean
}
