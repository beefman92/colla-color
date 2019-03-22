import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";
import { Counts } from "meteor/tmeasday:publish-counts";

export const Pieces = new Mongo.Collection("pieces");

if (Meteor.isServer) {
  Pieces._ensureIndex({ name: 1 }, { unique: true });
  if (Pieces.find({}) == undefined || Pieces.find({}).count() == 0) {
    Pieces.insert({
      name: "Heart",
      owner: "David",
      createdAt: new Date(),
      private: false,
      size: 20,
      board: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 8, 8, 8, 0, 0, 0, 0, 8, 8, 8, 0, 0, 0, 0, 0], [0, 0, 0, 0, 8, 3, 3, 3, 8, 0, 0, 8, 5, 5, 6, 8, 0, 0, 0, 0], [0, 0, 0, 8, 3, 3, 3, 2, 2, 8, 8, 5, 5, 6, 6, 6, 8, 0, 0, 0], [0, 0, 8, 3, 3, 3, 1, 2, 2, 5, 5, 5, 6, 6, 6, 7, 7, 8, 0, 0], [0, 0, 8, 3, 3, 1, 1, 1, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 0, 0], [0, 0, 8, 3, 2, 2, 1, 5, 5, 5, 6, 6, 6, 7, 7, 7, 4, 8, 0, 0], [0, 0, 8, 2, 2, 2, 5, 5, 5, 6, 6, 6, 7, 7, 7, 4, 4, 8, 0, 0], [0, 0, 0, 8, 2, 5, 5, 5, 6, 6, 6, 7, 7, 7, 4, 4, 8, 0, 0, 0], [0, 0, 0, 8, 5, 5, 5, 6, 6, 6, 7, 7, 7, 4, 4, 4, 8, 0, 0, 0], [0, 0, 0, 0, 8, 5, 6, 6, 6, 7, 7, 7, 4, 4, 4, 8, 0, 0, 0, 0], [0, 0, 0, 0, 0, 8, 6, 6, 7, 7, 7, 4, 4, 4, 8, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 8, 7, 7, 7, 4, 4, 4, 8, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 8, 7, 4, 4, 4, 8, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 8, 4, 4, 8, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      default: [
        "#FFFFFF", "#F3D1D1", "#951CD2", "#EB0B80", "#F36105", "#6CB6EF", "#58ED4E", "#F2F533", "#000000"
      ],
      colors: [
        "#FFFFFF", "#F3D1D1", "#951CD2", "#EB0B80", "#F36105", "#6CB6EF", "#58ED4E", "#F2F533", "#000000"
      ],
      cells: [{}, {}, {}, {}, {}, {}, {}, {}],
      editor: "David",
      modifiedAt: new Date(),
      fills: 0
    });
    Pieces.insert({
      name: "Smile",
      owner: "David",
      createdAt: new Date(),
      private: false,
      size: 30,
      board: [
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 3, 3, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 3, 3, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 3, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 3, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 3, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 3, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 3, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 3, 0, 0, 0
        ],
        [
          0, 0, 3, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 3, 0, 0
        ],
        [
          0, 0, 3, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 3, 0, 0
        ],
        [
          0, 3, 4, 4, 4, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 4, 4, 4, 3, 0
        ],
        [
          0, 3, 4, 4, 4, 4, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 3, 0
        ],
        [
          0, 3, 4, 4, 4, 4, 4, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 3, 0
        ],
        [
          3, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 3
        ],
        [
          3, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 3
        ],
        [
          3, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 3
        ],
        [
          3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3
        ],
        [
          3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3
        ],
        [
          1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 1
        ],
        [
          1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 1
        ],
        [
          1, 3, 3, 4, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 3, 3, 1
        ],
        [
          0, 1, 3, 4, 4, 4, 4, 4, 3, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 3, 4, 4, 4, 4, 4, 3, 1, 0
        ],
        [
          0, 1, 3, 3, 4, 4, 4, 4, 4, 4, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 4, 4, 4, 4, 4, 4, 3, 3, 1, 0
        ],
        [
          0, 1, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 1, 0
        ],
        [
          0, 0, 1, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 1, 0, 0
        ],
        [
          0, 0, 1, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 1, 0, 0
        ],
        [
          0, 0, 0, 1, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 1, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ]
      ],
      default: ["#FFFFFF", "#B32F02", "#FFFF00", "#ED8C04", "#EFB505"],
      colors: ["#FFFFFF", "#B32F02", "#FFFF00", "#ED8C04", "#EFB505"],
      cells: [{}, {}, {}, {}, {}],
      editor: "David",
      modifiedAt: new Date(),
      fills: 0
    });
    Pieces.insert({
      name: "Pikachu",
      owner: "David",
      createdAt: new Date(),
      private: false,
      size: 40,
      board: [
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 2, 2, 6, 6, 6, 0, 0
        ],
        [
          0, 0, 0, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 2, 2, 2, 6, 6, 0, 0, 0
        ],
        [
          0, 0, 0, 6, 6, 6, 3, 3, 3, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 2, 2, 2, 3, 6, 6, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 6, 6, 5, 2, 2, 2, 2, 3, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 6, 6, 0, 6, 6, 2, 2, 2, 2, 3, 3, 6, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 6, 6, 5, 3, 2, 2, 2, 2, 2, 2, 3, 6, 2, 2, 2, 2, 2, 2, 2, 6, 3, 2, 2, 2, 2, 3, 3, 6, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 6, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 6, 3, 6, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 3, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 6, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 2, 2, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 2, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 6, 3, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3, 2, 2, 6, 6, 1, 6, 2, 2, 2, 2, 2, 2, 6, 6, 1, 6, 2, 3, 6, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 6, 2, 3, 6, 0, 0, 0, 0, 0, 0, 0, 6, 2, 2, 2, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 2, 2, 6, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 6, 2, 2, 3, 6, 0, 0, 0, 0, 0, 0, 6, 2, 2, 2, 2, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 6, 2, 2, 2, 3, 6, 0, 0, 0, 0, 6, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 6, 6, 2, 2, 2, 2, 2, 2, 4, 4, 2, 6, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 6, 2, 2, 2, 2, 3, 6, 0, 0, 0, 6, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 6, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 6, 2, 2, 2, 2, 2, 3, 6, 0, 0, 6, 2, 4, 4, 4, 4, 2, 2, 6, 2, 2, 6, 6, 2, 2, 6, 2, 2, 4, 4, 4, 4, 6, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 6, 2, 2, 2, 2, 2, 2, 3, 6, 0, 6, 2, 2, 4, 4, 2, 2, 2, 2, 6, 6, 2, 2, 6, 6, 2, 2, 2, 2, 4, 4, 2, 6, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 6, 2, 2, 2, 2, 2, 2, 2, 3, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 6, 2, 2, 2, 2, 2, 2, 2, 2, 3, 6, 6, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 6, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 6, 2, 2, 2, 2, 2, 2, 2, 2, 6, 0, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 6, 2, 2, 2, 2, 2, 2, 6, 0, 6, 3, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 3, 6, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 6, 2, 2, 2, 2, 6, 0, 0, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 6, 2, 2, 2, 2, 6, 0, 0, 0, 6, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 6, 2, 2, 2, 2, 2, 6, 0, 6, 2, 2, 2, 6, 2, 2, 2, 6, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 6, 2, 6, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 6, 2, 2, 2, 2, 2, 6, 6, 2, 2, 2, 6, 2, 2, 2, 2, 6, 2, 2, 2, 2, 6, 2, 2, 2, 2, 6, 2, 2, 6, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 6, 2, 2, 3, 3, 5, 6, 2, 2, 2, 3, 6, 2, 2, 2, 6, 2, 2, 2, 2, 6, 2, 2, 2, 6, 3, 2, 2, 6, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 6, 3, 3, 3, 6, 6, 2, 2, 2, 3, 6, 2, 2, 2, 6, 2, 2, 2, 2, 6, 2, 2, 2, 6, 3, 2, 2, 6, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 6, 3, 5, 5, 6, 2, 2, 2, 2, 3, 6, 2, 2, 6, 2, 2, 2, 2, 6, 2, 2, 6, 3, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 6, 5, 5, 5, 5, 6, 2, 2, 2, 2, 2, 3, 6, 6, 2, 2, 2, 2, 2, 2, 6, 6, 3, 2, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 6, 5, 5, 5, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 5, 6, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3, 2, 3, 3, 6, 6, 6, 6, 6, 6, 6, 3, 3, 2, 3, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 2, 2, 6, 6, 6, 0, 0, 0, 0, 0, 0, 6, 6, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0
        ]
      ],
      default: [
        "#FFFFFF", "#FFFFFF", "#FFED00", "#FFB700", "#FF0000", "#A7772A", "#000000"
      ],
      colors: [
        "#FFFFFF", "#FFFFFF", "#FFED00", "#FFB700", "#FF0000", "#A7772A", "#000000"
      ],
      cells: [{}, {}, {}, {}, {}, {}, {}],
      editor: "David",
      modifiedAt: new Date(),
      fills: 0
    });
  }

  Meteor.publish("piece-count", function() {
    Counts.publish(this, "pieces-counter", Pieces.find());
  });

  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish("pieces-fills", function piecePublication(page) {
    check(page, Number);
    const skip = (page - 1) * 3;
    return Pieces.find(
      {},
      {
        fields: {
          name: 1,
          owner: 1,
          ownerId: 1,
          createdAt: 1,
          private: 1,
          size: 1,
          board: 1,
          colors: 1,
          cells: 1,
          editor: 1,
          modifiedAt: 1,
          fills: 1
        },
        sort: { fills: -1 },
        skip: skip,
        limit: 3
      }
    );
  });
  Meteor.publish("pieces-recent", function piecePublication() {
    // check(pageId, Number);
    return Pieces.find(
      {},
      {
        fields: {
          name: 1,
          owner: 1,
          ownerId: 1,
          createdAt: 1,
          private: 1,
          size: 1,
          board: 1,
          colors: 1,
          cells: 1,
          editor: 1,
          modifiedAt: 1,
          fills: 1
        },
        sort: { createdAt: -1 },
        limit: 9
      }
    );
  });
  Meteor.publish("piece-withId", function piecePublication(pieceId) {
    check(pieceId, String);
    const res = Pieces.find(
      { _id: pieceId },
      {
        fields: {
          name: 1,
          owner: 1,
          ownerId: 1,
          createdAt: 1,
          private: 1,
          size: 1,
          board: 1,
          colors: 1,
          cells: 1,
          editor: 1,
          modifiedAt: 1,
          fills: 1
        },
        limit: 1
      }
    );
    return res;
  });
  Meteor.publish("piece-own-withId", function editPiece(pieceId) {
    check(pieceId, String);
    const res = Pieces.find(
      { _id: pieceId },
      {
        fields: {
          name: 1,
          owner: 1,
          ownerId: 1,
          createdAt: 1,
          private: 1,
          size: 1,
          board: 1,
          default: 1
        },
        limit: 1
      }
    );
    return res;
  });
}

Meteor.methods({
  "piece.fill"(id, r, c, color) {
    check(id, String);
    check(r, Number);
    check(c, Number);
    check(color, String);
    // Make sure the user is logged in before inserting a task
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    color = color.toUpperCase();
    const res = Pieces.findOne({ _id: id });
    if (res) {
      const area = res.board[r][c];
      const oldColor = res.colors[area];
      if (!(color === oldColor)) {
        const colorString = "colors." + area;
        const cellString = "cells." + area;
        const editorString = "editor";
        const modifyString = "modifiedAt";
        Pieces.update(
          { _id: id },
          {
            $set: {
              [colorString]: color,
              [cellString]: { r, c },
              [editorString]: Meteor.user().username,
              [modifyString]: new Date()
            },
            $inc: {
              fills: 1
            }
          }
        );
      }
    }
  },
  "piece.edit"(id, board) {
    check(id, String);
    check(board, Array);
    // Make sure the user is logged in before inserting a task
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    const piece = Pieces.findOne(id);
    if (piece.ownerId !== this.userId) {
      // If the task is private, make sure only the owner can check it off
      throw new Meteor.Error("not-authorized");
    }
    const size = piece.size;
    let defaultColors = [];
    let newBoard = [];
    for (let i = 0; i < size; i++) {
      let subNewBoard = [];
      for (let j = 0; j < size; j++) {
        const color = board[i][j];
        const idx = defaultColors.indexOf(color);
        if (idx == -1) {
          subNewBoard.push(defaultColors.length);
          defaultColors.push(color);
        } else {
          subNewBoard.push(idx);
        }
      }
      newBoard.push(subNewBoard);
    }
    Pieces.update(
      { _id: id },
      {
        $set: {
          board: newBoard,
          default: defaultColors,
          colors: defaultColors,
          cells: [],
          editor: Meteor.user().username,
          modifiedAt: new Date()
        }
      }
    );

  },
  "piece.insert"(name, size) {
    check(size, Number);
    check(name, String);
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    size = Math.floor(size);
    if (size <= 0 || size > 50) {
      throw new Meteor.Error("invalid-input", "invalid size");
    }
    if (name.length == 0) {
      throw new Meteor.Error("invalid-input", "invalid name");
    }
    let board = [];
    for (let i = 0; i < size; i++) {
      let subboard = [];
      for (let j = 0; j < size; j++) {
        subboard.push(0);
      }
      board.push(subboard);
    }
    return Pieces.insert({
      name: name,
      owner: Meteor.user().username,
      ownerId: this.userId,
      createdAt: new Date(),
      private: false,
      size: size,
      board: board,
      default: ["#FFFFFF"],
      colors: ["#FFFFFF"],
      cells: [{}],
      editor: "",
      modifiedAt: new Date(),
      fills: 0
    });
  }
});
