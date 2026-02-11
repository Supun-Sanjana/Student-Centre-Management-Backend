import Grade from "../grade/grade.model";
import Center from "./center.model";

//create center
//don't add grades here , in grade have centerId ,
//add grade to center from there
interface Center {
  centerName: string;
  centerLocation: string;
}
export const createCenterService = async (data: Center) => {
  try {
    const res = await Center.create({
      centerName: data.centerName,
      centerLocation: data.centerLocation,
    });

    return res;
  } catch (error: any) {
    throw new Error(error);
  }
};
