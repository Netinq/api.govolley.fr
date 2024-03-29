const Joi = require('@hapi/joi');

const schema = Joi.object({
    email: Joi.string()
      .required()
      .email()
      .empty()
      .messages({
        "string.base": `Le champ est invalide`,
        "string.empty": `Le champ ne peu pas être vide`,
        "string.email": `Le champ doit être une adresse email`,
        "any.required": `Le champ est requis`
      }),
      password: Joi.string()
        .required()
        .empty()
        .messages({
          "string.base": `Le champ est invalide`,
          "string.empty": `Le champ ne peu pas être vide`,
          "any.required": `Le champ est requis`
        }),
        nickname: Joi.string()
          .required()
          .empty()
          .messages({
            "string.base": `Le champ est invalide`,
            "string.empty": `Le champ ne peu pas être vide`,
            "any.required": `Le champ est requis`
          }),
          age: Joi.date()
            .required()
            .empty()
            .messages({
              "date.base": `Le champ est invalide`,
              "date.empty": `Le champ ne peu pas être vide`,
              "any.required": `Le champ est requis`
            }),
            level: Joi.number()
              .required()
              .empty()
              .messages({
                "number.base": `Le champ est invalide`,
                "number.empty": `Le champ ne peu pas être vide`,
                "any.required": `Le champ est requis`
              }),
});

module.exports = schema;