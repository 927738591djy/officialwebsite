import request from '@/utils/request'

export const getImageList = function(){
    return request({
        method:'post',
        url:"/cms/article/list",
       
    })
}