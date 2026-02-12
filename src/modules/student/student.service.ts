import Student from "./student.model";

interface StudentSchema {
  studentNo: string;
  firstName: string;
  lastname: string;
  grade: string;
  whatsappNumber: string;
  parentContactNumber: string;
}

export const createStudentService = async (
  data: StudentSchema,
  gradeId: string ,
) => {
  try {
    const res = await Student.create({
      firstName: data.firstName,
      lastName: data.lastname,
      whatsappNumber: data.whatsappNumber,
      parentContactNumber: data.parentContactNumber,
      grade: gradeId,
    });

    return res;
  } catch (error: any) {
    throw new Error(error);
  }
};
