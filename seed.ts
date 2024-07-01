import { prisma } from "./lib/utils";
import { faker } from "@faker-js/faker";
import { nanoid } from "nanoid";

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
  const propertyTypes = [
    "House",
    "Apartment",
    "Condo",
    "Land",
    "Office",
    "Flat",
  ];

  for (let i = 0; i < count; i++) {
    try {
      const isForSale = faker.datatype.boolean();
      const isForRent = !isForSale;

      const property = await prisma.property.create({
        data: {
          id: nanoid(10),
          name: faker.lorem.words(3),
          excerpt: faker.lorem.sentences(2),
          description: faker.lorem.paragraphs(2),
          bedrooms: faker.number.int({ min: 1, max: 6 }),
          bathrooms: faker.number.int({ min: 1, max: 4 }),
          lotSize: faker.number.float({
            min: 1000,
            max: 10000,
            precision: 0.01,
          }),
          squareFeet: faker.number.float({
            min: 500,
            max: 5000,
            precision: 0.01,
          }),
          propertyType: faker.helpers.arrayElement(propertyTypes),
          location: faker.location.streetAddress(),
          state: faker.helpers.arrayElement(states),
          salePrice: isForSale
            ? faker.number.float({
                min: 100000,
                max: 2000000,
                fractionDigits: 2,
              })
            : null,
          rentPrice: isForRent
            ? faker.number.float({ min: 500, max: 10000, fractionDigits: 2 })
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
