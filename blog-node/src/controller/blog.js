const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1546610491112,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1546610524373,
            author: 'lisi'
        }
    ]
}

const getDetail = (id) => {
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1546610491112,
            author: 'zhangsan'
        }
    ]
}

const newBlog = (blogData = {}) => {
    // blogData是一个对象，包含title content属性
    console.log('newBlog blogData', blogData)
    return {
        id: 3,  // 表示新建博客，插入到数据表里面的id
    }
}

module.exports = {
    getList,
    getDetail,
    newBlog
}