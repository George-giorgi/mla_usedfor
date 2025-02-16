"use server";

import { Item } from "./definitions";
import prisma from "./prisma";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { storage, ref, uploadBytesResumable, getDownloadURL } from "./firebace";

export async function createItem(formData: FormData) {
  // console.log(formData.get("usedphoto"), formData.get("mistakesphoto"));
  const uploadPromises = [];
  const file = formData.get("usedphoto") as File;
  const file1 = formData.get("mistakesphoto") as File;
  // if (!file) throw new Error("No file uploaded");

  const processFile = async (file: any) => {
    try {
      // const filePath = file.path;
      const fileName = file.name;

      const storageRef = ref(storage, `images/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              // Clean up temporary files
              // fs.unlinkSync(filePath);
              // fs.unlinkSync(filePath);
              resolve(downloadURL);
            });
          }
        );
      });
    } catch (error: any) {
      throw new Error(`Error processing file ${file.name}: ${error.message}`);
    }
  };
  uploadPromises.push(processFile(file));
  uploadPromises.push(processFile(file1));
  const [url, url1] = await Promise.all(uploadPromises);
  console.log(url, url1);
  const rawFormData: Item = {
    uuid: formData.get("uuid") as string,
    name: formData.get("itemname") as string,
    usedfor: formData.get("usefor") as string,

    usedphoto_url: url as string,
    mistakesphoto_url: url1 as string,

    tipstriks: formData.get("tipsandtriks") as string,
    mistakes: formData.get("mistakes") as string,
  };
  const {
    uuid,
    name,
    usedfor,
    usedphoto_url,
    mistakesphoto_url,
    tipstriks,
    mistakes,
  } = rawFormData;

  const newItem = await prisma.item.create({
    data: {
      uuid,
      name,
      usedfor,
      tipstriks,
      mistakes,
      usedphoto_url,
      mistakesphoto_url,
    },
  });
  revalidatePath("/search");
  redirect("/search");
}
