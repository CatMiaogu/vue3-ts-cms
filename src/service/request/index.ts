import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { AXRequestInterceptors, AXRequestConfig } from './type'

// import { ElLoading } from 'element-plus'
// import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

// const DEAFULT_LOADING = true

class AXRequst {
  instance: AxiosInstance
  interceptors?: AXRequestInterceptors
  // showLoading: boolean
  // loading?: ILoadingInstance

  constructor(config: AXRequestConfig) {
    this.instance = axios.create(config)

    // 保存基本信息
    // this.showLoading = config.showLoading ?? DEAFULT_LOADING
    this.interceptors = config.interceptors

    this.interceptors = config.interceptors

    // 从 config 中取出的拦截器是传给实例的，根据实际情况可有可无
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        return err
      }
    )
  }

  request<T>(config: AXRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 2.将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: AXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: AXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: AXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: AXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default AXRequst
