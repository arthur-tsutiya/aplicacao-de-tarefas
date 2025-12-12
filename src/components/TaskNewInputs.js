import './TaskNewInputs.css';

export default function TaskNewInputs() {
    
    return (
        <div className="task-new-input-wrapper">
            <div className="task-new-title c1">
                <span className="task-new-title-icon i1"></span>
                <p className="input-placeholder p1">input here</p>
            </div>
            <div className="task-new-tags c2">
                <span className="task-new-title-icon i2"></span>
                <p className="input-placeholder p2">input here</p>
            </div>
            <div className="task-new-notes c3">
                <span className="task-new-title-icon i3"></span>
                <p className="input-placeholder p3">input here</p>
            </div>
        </div>
    );  
}