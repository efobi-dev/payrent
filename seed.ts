import { prisma } from "./lib/utils";
import { faker } from "@faker-js/faker";

export async function generatePropertyData(count: number = 50) {
  const states = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Lagos",
    "Enugu",
    "Abuja",
    "Rivers",
    "Kano",
    "Oyo",
    "Kaduna",
    "Delta",
    "Imo",
  ];

  const paymentDurations = ["Monthly", "Quarterly", "Yearly", null];

  for (let i = 0; i < count; i++) {
    try {
      const isForSale = faker.datatype.boolean();
      const isForRent = isForSale ? faker.datatype.boolean() : true;

      const property = await prisma.property.create({
        data: {
          name: faker.lorem.words(3),
          description: faker.lorem.paragraph(),
          bedrooms: faker.number.int({ min: 1, max: 6 }),
          bathrooms: faker.number.int({ min: 1, max: 4 }),
          location: faker.location.streetAddress(),
          state: faker.helpers.arrayElement(states),
          paymentDuration: isForRent
            ? faker.helpers.arrayElement(paymentDurations)
            : null,
          isForSale,
          isForRent,
          salePrice: isForSale
            ? faker.number.float({ min: 100000, max: 2000000, precision: 0.01 })
            : null,
          rentPrice: isForRent
            ? faker.number.float({ min: 500, max: 10000, precision: 0.01 })
            : null,
          images: {
            create: Array.from(
              { length: faker.number.int({ min: 1, max: 5 }) },
              () => ({
                url: faker.image.url({
                  width: 640,
                  height: 480,
                }),
              })
            ),
          },
        },
      });

      console.log(`Created property with ID: ${property.id}`);
    } catch (error) {
      console.error("Error creating property:", error);
    }
  }

  console.log(`Attempted to create ${count} property records.`);
  await prisma.$disconnect();
}
