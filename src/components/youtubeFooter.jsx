import React from 'react';
import '../css/youtube-footer.css';

function youtubeFooter() {
    return (
        <div className="youtube-footer">
        <div className="section-main-youtube">
        <div className="sec-youtube-contents">
        <div className="section-main-youtube-tit">
            <div className="youtube-avart"></div>
            <strong className="youtube-ch-tit">제주완니TV</strong>
        </div>
        <div className="section-main-youtube-video-tit">
        [제주완니TV X 효리네민박] <br /> 제주도에서 즐기는...
        </div>
        <div className="section-main-youtube-contents">
        제주완니TV 직접 이효리 방문한 사연은..                
        </div>
        <div className="btn-youtube btn-55">
        유튜브 구독하러가기
        </div>
        </div>
        <div className="section-main-youtube-contentsDisplayArea">
        <iframe width="460" height="215" src="https://www.youtube.com/embed/uNaf-w9SQis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    </div>
    );
}

export default youtubeFooter;