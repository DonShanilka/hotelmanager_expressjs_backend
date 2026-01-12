import {Auth} from "../model/Auth";
import {prisma} from "../db/Prisma_data_storage";
import bcrypt from 'bcrypt';

export async function AddUser(auth: Auth) {
    const hashPassword = await bcrypt.hash(auth.password,10);
    try {
        const newUser = await prisma.user.create({
            data: {
                userEmail:auth.userEmail,
                password:hashPassword,
                rolle:auth.rolle
            }
        })
        console.log("User saved : ", newUser)
    }catch (err){
        console.log("Error during user save : ", err);
    }
}

export async function verifyUser(verify: Auth) {
  // 1️⃣ Find user by email ONLY
  const user = await prisma.user.findUnique({
    where: { userEmail: verify.userEmail },
  });

  if (!user) {
    return null; // user not found
  }

  // 2️⃣ Compare password
  const isValid = await bcrypt.compare(verify.password, user.password);

  if (!isValid) {
    return null; // wrong password
  }

  // 3️⃣ Return user (includes role)
  return user;
}
