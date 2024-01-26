export const storage = {
    getKey(key){
        const value = window.localStorage.getItem(key);
        if(!key){
            return []
        }
        return value
    },
    assignValue(key, value){
        window.localStorage.setItem(key, value)
    },
    removeItem(key){
        window.localStorage.removeItem(key)
    }
}