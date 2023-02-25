import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
    const prisma = new PrismaClient();
    
    const developer = await prisma.developer.update({
        where: {
            contract_address: req.body.contract_address
        },
        data: {
            closed: true,
        }
    });
    res.status(200).json(developer);
}