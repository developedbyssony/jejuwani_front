import React from 'react';
import '../../css/myBlog.css';

function blogProfile({ name }) {
   return <div>
        <div className="your-blog-user-profile-img">
            <strong>{name || ''}</strong>                                    
        </div>
    </div>
}

export default blogProfile;