import { useGoogleLogin } from '@react-oauth/google';
import React, { useEffect } from 'react'
import { signup } from '../store/actions/user.actions';

export  function GoogleLoginBtn({googleUser,setGoogleUser,axios,dispatch,navigate,type,isUserlogged, setIsUserlogged, from,shoppingCart}) {
    
    useEffect(() => {
        googleLogin()
    }, [googleUser])

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log('codeResponse',codeResponse);
            setGoogleUser(codeResponse)
            googleLogin()
        },
        onError: (error) => console.log('Login Failed:', error)
    }
    
    );
    const googleLogin= async () => {
        try{

            if (googleUser) {
         const res=    await   axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleUser.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${googleUser.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                        console.log('res.data',res.data)
                    const {name,email,given_name,picture} =res.data
                    const formatedUser = {
                            fname: name,
                            userName:given_name,
                            email,
                            imgUrl:picture,                          
                                          }
                      dispatch(signup(formatedUser,from,shoppingCart))
                        console.log('formatedUser',formatedUser);
                        if(from==='header'){
                            navigate('/')
                        }  if (from === 'shopping-cart'){
                            setIsUserlogged(!isUserlogged )
                        }
                    
        }
    }catch(err){
            console.log('could not google login',err);
        }
 
    }
  return (
<div onClick={() => login()} className="google-signup-btn flex-ac">
  <div className="google-icon-wrapper">
    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
  </div>
  <div className="btn-text"><span>{type} </span></div>
  </div>
  )
}
