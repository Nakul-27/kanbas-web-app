import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
	assignments: assignments,
};

const assignmentSlice = createSlice({
	name: "assignments",
	initialState,
	reducers: {
		setAssignments: (state, action) => {
			state.assignments = action.payload;
		},
		addAssignment: (state, { payload: assignment }) => {
			const newAssignment: any = {
				_id: new Date().getTime().toString(),
				title: assignment.title,
				course: assignment.course,
				description: assignment.description || "",
				points: assignment.points || 100,
				dueDate: assignment.dueDate || "2024-05-13",
				availableFromDate: assignment.availableFromDate || "2024-05-06",
				availableUntilDate: assignment.availableUntilDate || "2024-05-13",

			};
			state.assignments = [...state.assignments, newAssignment] as any;
		},
		deleteAssignment: (state, { payload: assignmentId }) => {
			state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
		},
		updateAssignment: (state, { payload: assignment }) => {
			state.assignments = state.assignments.map((a: any) =>
				a._id === assignment._id ? assignment : a
			) as any;
		},
		editAssignment: (state, { payload: assignmentId }) => {
			state.assignments = state.assignments.map((a: any) =>
				a._id === assignmentId ? { ...a, editing: true } : a
			) as any;
		}
	}
})

export const { setAssignments, addAssignment, deleteAssignment, updateAssignment, editAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;
