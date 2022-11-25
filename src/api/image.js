import request from '@/utils/request'

export const getImageList = function(){
    return request({
        method:'post',
        url:"/cms/article/list",
       
    })
}

export const getImageDetail = function(id){
    return request({
        method:'get',
        url:`/cms/tag/list/${id}`,
    })
}