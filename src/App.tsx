import React from 'react';
import { demoSegments, TimelineBlock } from './components';

const App: React.FC = () => {
    return (
        <main>
            <TimelineBlock heading={'Исторические\nдаты'} segments={demoSegments} />
        </main>
    );
};

export default App;
