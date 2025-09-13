import { useState } from 'react';
import Panel from './Panels';

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null); // Track active panel index

    return (
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Panel
                title="About"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(activeIndex === 0 ? null : 0)}
            >
                Hooooooooooooooooooooo
            </Panel>
            <Panel
                title="Etymology"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(activeIndex === 1 ? null : 1)}
            >
                Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
            </Panel>
            <Panel
                title="History"
                isActive={activeIndex === 2}
                onShow={() => setActiveIndex(activeIndex === 2 ? null : 2)}
            >
                Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
            </Panel>
        </>
    );
}
