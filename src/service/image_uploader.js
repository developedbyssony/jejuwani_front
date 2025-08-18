class ImageUploader {
    async upload(file) {
        const data = new FormData();
        data.append('file',file);
        data.append('cloud_name', 'dlddfqazz');
        data.append('api_key', '346619898195481');
        data.append('timestamp', (Date.now() / 1000) | 0);
        data.append('upload_preset','ni9wgsti');

        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dlddfqazz/image/upload',
            {
                method : 'POST',
                body: data,
            }
        )
        return await res.json();
    }
}
export default ImageUploader;