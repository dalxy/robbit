import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({});

async function main() {
  // 增
  // const res = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: 'zhangsan',
  //       age: 13,
  //     },
  //   ],
  //   skipDuplicates: true, //插入重复数据时，不会报错
  // });
  // console.log(res);
  // 删
  // await prisma.user.deleteMany(); // 删除全部记录
  const res = await prisma.user.delete({
    where: {
      id: 1,
    },
  });
  console.log(res);
  // 改
  // const res = await prisma.user.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     name: 'lisi',
  //   },
  // });
  // console.log(res);
  // 查
  // const res = await prisma.user.findUnique({
  //   where: {
  //     id: 1,
  //   },
  // });
  // console.log(res);
}
main()
  .catch((e) => {
    return console.log(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
