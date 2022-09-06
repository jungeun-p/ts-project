import React, { useState } from 'react';

type Information = {
    name: string;
    description: string;
}
const Information = () => {
    const [info, setInfo] = useState<Information | null>(null);
    return (
        <div>
            {info?.name}
        </div>
    );
};

export default Information;