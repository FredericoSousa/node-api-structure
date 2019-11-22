const Yup = require('yup');

const filmeSchema = Yup.object().shape({
	titulo: Yup.string().required(),
	ano: Yup.string().required(),
	diretor: Yup.string().required(),
});

module.exports = { filmeSchema };
