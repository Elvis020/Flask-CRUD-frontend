export default class ApiService{
    static URL = "http://127.0.0.1:5000";
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