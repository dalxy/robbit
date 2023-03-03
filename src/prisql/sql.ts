import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({});

export async function add(data: any) {
  const res = await prisma.user
    .createMany({
      data: data,
      skipDuplicates: true, //插入重复数据时，不会报错
    })
    .catch((e) => {
      return console.log(e);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
  // console.log(res);
  return res;
}

export async function del() {
  // await prisma.user.deleteMany(); // 删除全部记录
  const res = await prisma.user
    .delete({
      where: {
        id: 2,
      },
    })
    .catch((e) => {
      return console.log(e);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
  console.log('del', res);
}

export async function update() {
  const user = await prisma.user
    .update({
      where: {
        id: 1,
      },
      data: {
        name: 'Peters',
      },
    })
    .catch((e) => {
      return console.log(e);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
  console.log(user);
}

export async function sel(data: any) {
  // await prisma.user.findMany(); // 查询全部记录
  const res = await prisma.user
    .findUnique({
      // where: {id: 1, },
      where: data,
    })
    .catch((e) => {
      return console.log(e);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
  console.log(res);
  return res;
}
