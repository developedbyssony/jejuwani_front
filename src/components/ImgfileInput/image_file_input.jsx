import React, { useRef } from 'react';
import styled, { css } from 'styled-components';

const Input = styled.input`
    display:none;
`;

function image_file_input({ imageUploader, name, onFileChange }) {
    const inputRef = useRef();
    const onBtnClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    };
    const onChange = async event => {
        console.log(event.target.files[0]);
        const uploaded = await imageUploader.upload(event.target.files[0]);
        onFileChange({
            name : uploaded.original_filename,
            url: uploaded.url,
        })
        console.log(uploaded);
    };
   return <div>
       <Input
            ref={inputRef}
            type="file" 
            accept="image/*" 
            name="file"
            onChange={onChange}
            >
        </Input>
       <button className="btn-outlined btn-55" id="uploadBtn" onChange={onChange} onClick={onBtnClick}>{name || 'no file'}</button>
    </div>
}

export default image_file_input;