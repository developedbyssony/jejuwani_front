import React, { useState } from 'react'
import KakaoMapScript from '../library/kakaoMapScript'

export default function LandingPage() {
    const [ InputText, setInputText ] = useState("");
    const [ Place, setPlace ] = userState("");

    const onChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        if (Value === "") {
            alert ("검색어를 입력해주세요.")
        }
        e.preventDefault()
        setPlace(InputText)
        setInputText("")
    }

    return (
        <div>
        <form className="input-group" onSubmit={handleSubmit}>
            <input class="form-input" type="text" placeholder="키워드 검색" />
            <button type="submit"><div class="ic-search"></div></button>
            <KakaoMapScript searchPlace={Place} />
        </form>
        </div>
    )     
}
