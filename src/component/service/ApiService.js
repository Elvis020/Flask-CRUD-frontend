export default class ApiService{
    static URL = "https://flask-crud1-99.herokuapp.com";
    static updateArticle(id,body){
        return fetch(`${ApiService.URL}/update/${id}/`,{
            'method':'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(body)
        }).then(res => res.json())
    }
    static insertArticle(body){
        return fetch(`${ApiService.URL}/add`,{
            'method':'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(body)
        }).then(res => res.json())
    }
    static DeleteArticle(id){
        return fetch(`${ApiService.URL}/delete/${id}/`, {
            'method': 'DELETE'
        })
    }
}