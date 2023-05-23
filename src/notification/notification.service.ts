import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CreateNotificationDto } from "./dto/create-notification.dto";
import { UpdateNotificationDto } from "./dto/update-notification.dto";
import {
  NotificationDocument,
  Notification,
} from "./schemas/notification.schema";
import { Model, Types } from "mongoose";
import * as firebaseAdmin from "firebase-admin";
const serviceAccount = require("../../homey-baytoti-firebase-adminsdk-t215k-de7f05c64f.json");


@Injectable()
export class NotificationService {
  private fcmAdmin: firebaseAdmin.app.App;
  constructor(
    @InjectModel(Notification.name)
    private notificationModel: Model<NotificationDocument>,
  ) {
    this.fcmAdmin = firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(serviceAccount),
    });
  }


  sendSingleNotification(
    payload: any,
    fcmToken: string,
  ) {
    this.fcmAdmin
      .messaging()
      .sendToDevice(fcmToken, payload, { priority: "high" })
      .then(async (result) => {
        console.log(result)
        console.log(result.results[0].error)
        console.log('hi')
      })
      .catch((error) => console.log("Error sending message:", error));
  }


  async create(createNotificationDto: CreateNotificationDto) {
    const createNotification = new this.notificationModel(createNotificationDto);
    await createNotification.save()
    return 'done'
  }

  async findALlForDashboard(){
    return this.notificationModel.find({isDashboard: true}, {isDashboard: 0, user: 0 }).sort({createdAt: -1})
  }

  async findForUser(userId: string){
    return await this.notificationModel.find({userId, isDashboard: false }, { isDashboard: 0, user: 0 }).sort({createdAt: -1})
  }


}
