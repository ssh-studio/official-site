import Airtable, { Error } from "airtable";
import { Resend } from 'resend';

export async function POST(request: Request) {
    const airtableBase = new Airtable({apiKey: process.env.AIRTABLE_ACCESS_TOKEN}).base("applEi0ZgreOceYRX")
    const res = await request.json()
    if (res.email !== "") {
        const createAirtableRecord = airtableBase('Table 1').create({
            "Name": res.name,
            "Email": res.email,
            "Message": res.message,
            "Company Name": res.company,
            "isSubscribed": res.newsletters === "on" ? true : false
        }, function (err:Error, record:any) {
            if (err) {
                console.error(err);
                return Response.json({ message: "Something went wrong!", source: "ARTB" }, {
                    status: 500,
                });
            }
        })
        if (process.env.NODE_ENV !== "production") {
            console.log(createAirtableRecord);
        }
    }
    if (res.newsletters === "on") {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const createContact = await resend.contacts.create({
            email: res.email,
            firstName: String(res.name).split(" ")[0],
            lastName: String(res.name).split(" ")[1],
            unsubscribed: false,
            audienceId: 'f5c99301-b8f0-46ee-997e-e98f7f8c097a',
          });
          if (createContact.error?.message) {
            if (process.env.NODE_ENV !== "production") {
                console.log(createContact.error);
            }
            return Response.json({message: "Something went wrong!",source: "RSND"},{
                status: 500,
            })
          }
          if (process.env.NODE_ENV !== "production") {
            console.log(createContact.data?.id);
        }
    }
    if (process.env.NODE_ENV !== "production") {
        console.log(res);
    }
    return Response.json({message: "OK"},{
        status: 200,
    })
  }