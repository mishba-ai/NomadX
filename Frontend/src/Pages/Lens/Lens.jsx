import { useState, useEffect } from 'react';
  import api from '../../api';



    function Lens() {
      const [photos, setPhotos] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        fetchPhotos();
      }, []);

      const fetchPhotos = async () => {
        try {
          const response = await api.get('/api/photos');
          setPhotos(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching photos:', error);
          setLoading(false);
        }
      };

      const handlePhotoUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('photo', file);

        try {
          await api.post('/api/photos', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          fetchPhotos();
        } catch (error) {
          console.error('Error uploading photo:', error);
        }
      };

      return (
        <div className="bg-[#070707] min-h-screen text-gray-200 pl-44 font-Robotomono p-8">
          <h1 className="text-4xl font-bold mb-8">Nomad Lens</h1>
          
          <div className="mb-8">
            <label htmlFor="photo-upload" className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
              Upload Photo
            </label>
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />
          </div>

          {loading ? (
            <p className="text-xl">Loading photos...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {photos.map((photo) => (
                <div key={photo.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                  <img src={photo.url} alt={photo.description} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <p className="text-sm text-gray-400">{photo.location}</p>
                    <p className="mt-2 text-sm">{photo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    
   
  


export default Lens