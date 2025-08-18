import { useState, useRef } from 'react';
import uuid from 'react-uuid'
import '../../css/write.css';

function write({ FileInput, onCreate }) {
        const blogCategoryRef = useRef();
        const blogTitleRef = useRef();
        const blogContentsRef = useRef();
        const blogRegionRef = useRef();
        const formRef = useRef();
        /*
        const [ watch, setValue ] = useForm();


        useEffect(() => {
            const subscription = watch((value) => {
              localStorage.setItem('source', JSON.stringify(value));
            });
          }, [watch]);

        useEffect(() => {
            if (localStorage.getItem('source')) {
              const getSource = JSON.parse(localStorage.getItem('source'));
              SourceList.forEach((el, idx) => {
                setValue(`source_${idx + 1}`, eval(`getSource.source_${idx + 1}`));
              });
              SourceList.forEach((el, idx) => {
                setValue(`volume_${idx + 1}`, eval(`getSource.volume_${idx + 1}`));
              });
            }
          }, []);
          */

        const [ fileImg, setFileImage ] = useState(false);
        const [ file, setFile ] = useState({fileName : null, fileURL : null});
        const [ state, setState ] = useState({
            key : "",
            category: "",
            region:"",
            title:"",
            contents:"",
        });


        const onFileChange = file => {
            let url = file.url;
            let urlSlice = url.slice(url.lastIndexOf(".") + 1).toLowerCase();
            if(!(urlSlice == "gif" ||urlSlice == "jpg" || urlSlice == "png")) {
                alert("gif, jpg, png 확장자 파일을 업로드해주세요.");
                return;
            }
            setFileImage(!fileImg);
            setFile({
                fileName : file.name, 
                fileURL : file.url
            });
            }

        const onSubmit = event => {
            event.preventDefault();
            setState({
                key : uuid(),
                category : blogCategoryRef.current.value || '',
                region : blogRegionRef.current.value || '',
                title : blogTitleRef.current.value || '',
                contents : blogContentsRef.current.value || '',
                fileName : file.fileName,
                fileURL : file.fileURL,
            });
            console.log(state);
            onCreate(state.key, state.category, state.region, state.title, state.contents, state.fileName, state.fileURL); 
            alert('저장 성공');
            formRef.current.reset();
        }

        const fileDelete =  file => {
            setFile({
                fileName : '', 
                fileURL : ''
            });
            setFileImage(!fileImg);
        }

        return (
            <>
            <div className="blog-img-upload">
                <div className="blog-img-upload-contents">
                {fileImg ? (
                <div className="upload-img-cover">
                    <div className="upload-sentence">
                    <p className="fileName">{file.fileName}<h1 className="i-delete" onClick={fileDelete}></h1></p>
                    </div>
                </div>
                    ) 
                    : (<FileInput name={'커버 사진 추가하기'} onFileChange={onFileChange} style={{ position:'absolute', zIndex:'999', }}/>)}
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="section">
                        <h1 className="page-tit">미니 블로그✏️</h1>
                        <form className="blog-write-form" action="/" method="POST" ref={formRef}>
                            <div className="write-check-box">
                            <p><input type="radio" name="category" id="check-label" ref={blogCategoryRef} value="1"></input></p>액티비티
                            <p><input type="radio" name="category" id="check-label" ref={blogCategoryRef} value="2"></input></p>맛집
                            </div>
                            <div className="write-inputs">
                            <div className="write-region-inputs-write">
                            <span className="signup-title update" id="write-tit">지역</span>
                                <div className="select-group is-active" id="write-region-select">
                                <select className="form-select" id="mandatory-select" required ref={blogRegionRef}>
                                <option value="">지역 선택</option>
                                <option value="1">제주시</option>
                                <option value="2">서귀포시</option>
                                <option value="3">북제주(서)</option>
                                <option value="4">북제주(동)</option>
                                <option value="5">남제주(서)</option>
                                <option value="6">남제주(동)</option>
                                <option value="7">마라도, 우도, 추자도</option>
                                </select>
                                </div>
                            </div>
                            <div className="write-region-inputs-write">
                            <span className="signup-title update" id="write-tit">제목</span>
                            <div className="input-group blog-write-tit" id="blog-write-tit-input">
                                <input type="text" id="blog-write-tit" placeholder='제목' ref={blogTitleRef}></input>
                            </div>
                            </div>
                            <div className="blog-write-textarea">
                            <span className="signup-title update" id="write-tit">내용</span>
                            <div className="input-group write-contents">
                                <input type="text" id="blog-write-textarea" placeholder='내용' ref={blogContentsRef}></input>
                            </div>
                            </div>
                            </div>
                            <div className="upload-btn-sec">
                            <input type="submit" className="btn-secondary btn-55" value="올리기" id="uploadBtn" onClick={onSubmit}></input>
                            </div>
                        </form>
                </div>
                </div>
                </div>
            </div>
            </>
        );
    }

export default write;