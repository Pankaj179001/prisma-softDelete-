// import { SoftDeletedModels } from './SoftDeletedModels';

// const deletedAt = new Date(Date.now());
// //------------------------deprecated----------
// export const SoftDelete = async (params, next) => {
//   if (SoftDeletedModels.includes(params?.model)) {
//     if (params.action === 'delete') {
//       params.action = 'update';
//       params.args['data'] = { deletedAt };
//     }
//     if (params.action == 'deleteMany') {
//       // Delete many queries
//       params.action = 'updateMany';
//       if (params.args.data != undefined) {
//         params.args.data['deletedAt'] = deletedAt;
//       } else {
//         params.args['data'] = { deletedAt };
//       }
//     }
//     if (params.action === 'findMany') {
//       if (params.args.where) {
//         params.args.where.deletedAt == undefined
//           ? (params.args.where.deletedAt = null)
//           : '';
//       } else {
//         params.args['where'] = { deletedAt: null };
//       }
//     }
//     return next(params);
//   }
//   return next(params);
// };
