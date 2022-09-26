import React, { useEffect, useState } from 'react';

const useSingleTool = id => {
    const [singleTool, setSingleTool] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => setSingleTool(data));
    }, [id]);
    return [singleTool, setSingleTool];
};
export default useSingleTool;