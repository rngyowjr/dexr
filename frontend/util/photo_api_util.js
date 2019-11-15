export const fetchPhotos = () => (
    $.ajax({
        method: 'GET',
        url: `/api/photos`
    })
);

export const createPhoto = (photo) => (
    $.ajax({
        method: 'POST',
        url: `/api/photos`,
        data: { photo }
    })
);

export const deletePhoto = (photoId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/photos/${photoId}`
    })
);