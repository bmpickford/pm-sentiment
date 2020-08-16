import React from 'react';
import { PMData } from './types/PMData';

interface IdentifierProps {
    data: PMData
}

export const Identifier = ({ data }: IdentifierProps) => {
    const colour = data.class === "Negative" ? 'red' : 'blue';
    return (
        <div style={{color: colour}}>{data.name} : {data.party}</div>
    );
}