import { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
export default function AssignmentControlButtons({ deleteAssignment }: {
    deleteAssignment: () => void;
}) {
    const [confirm, setConfirm] = useState(false);

    const handleDelete = () => {
        deleteAssignment();
        setConfirm(false);
    }

    return (
        <div className="d-flex align-items-center">
            <GreenCheckmark />
            <button
                onClick={() => setConfirm(true)}
                className="btn btn-danger ms-2"
            >
                Delete
            </button>
            <IoEllipsisVertical className="fs-6" />

            {confirm && (
                <div className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Deletion</h5>
                                <button type="button" className="btn-close" onClick={() => setConfirm(false)}></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this assignment?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setConfirm(false)}>
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-danger" onClick={handleDelete}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
