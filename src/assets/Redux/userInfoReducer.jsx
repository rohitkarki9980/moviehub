const initialState={
    'email':"",
    isLogin:false,  

}

export const userInfoReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                'email':action.payload,
                isLogin:true
            }
        case 'LOGOUT':
            return{
                ...state,
                'email':"",
                isLogin:false
            }
        default:
            return state
    }
}