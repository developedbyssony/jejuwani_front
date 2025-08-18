import React from 'react';
import '../../css/myBlog.css';

function blogProfile({ name, data }) {
   return <div>
        <div className="your-blog-user-profile-img">
            <img src={`${process.env.PUBLIC_URL}${data}`} alt="프로필이미지"  style={{position:'relative', top:'-80px', left: '-30px', width:'180px', height:'180px', objectFit:'contain'}}/>
            <strong>{name || ''}</strong>                                    
        </div>
    </div>
}

export default blogProfile;