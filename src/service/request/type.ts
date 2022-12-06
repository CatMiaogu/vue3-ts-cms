import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface AXRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface AXRequestConfig extends AxiosRequestConfig {
  interceptors?: AXRequestInterceptors
}
