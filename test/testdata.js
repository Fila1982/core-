var keyPair = {
  priv: '0dea92f1df6675085b5cdd965487bb862f84f2755bcb56fa45dbf5b387a6c4a0',
  pub: '026092daeed8ecb2212869395770e956ffc9bf453f803e700f64ffa70c97a00d80',
};

var message = {
  text: 'hello world',
  signature: '3045022100addd20e5413865d65d561ad2979f2289a40d52594b1f804840babd9a63e4ebbf02204b86285e1fcab02df772e7a1325fc4b511ecad79a8f80a2bd1ad8bfa858ac3d4', // with 5c0e043a513032907d181325a8e7990b076c0af15ed13dc5e611cda9bb3ae52a
};

var copayers = [{
  xPrivKey: 'xprv9s21ZrQH143K2rMHbXTJmWTuFx6ssqn1vyRoZqPkCXYchBSkp5ey8kMJe84sxfXq5uChWH4gk94rWbXZt2opN9kg4ufKGvUM7HQSLjnoh7e',
  xPubKey: 'xpub661MyMwAqRbcFLRkhYzK8eQdoywNHJVsJCMQNDoMks5bZymuMcyDgYfnVQYq2Q9npnVmdTAthYGc3N3uxm5sEdnTpSqBc4YYTAhNnoSxCm9',
  xPubKeySignature: '30440220192ae7345d980f45f908bd63ccad60ce04270d07b91f1a9d92424a07a38af85202201591f0f71dd4e79d9206d2306862e6b8375e13a62c193953d768e884b6fb5a46', // signed using keyPair.priv
  privKey: '5c0e043a513032907d181325a8e7990b076c0af15ed13dc5e611cda9bb3ae52a', // derived with 'm/1/0'
  pubKey: '03814ac7decf64321a3c6967bfb746112fdb5b583531cd512cc3787eaf578947dc',
}, {
  xPrivKey: 'xprv9s21ZrQH143K2JgXh8Va3Taq22D2gXw2nYULffV5dc9acQvAmB3KhomPKGwV9AbVsBcAXMW2QxCnvmHU1rVtHRfZwTxdEEAN5ZojRYdryQ1',
  xPubKey: 'xpub661MyMwAqRbcEnkzoA2aQbXZa43X5zet9mPwU3thBwgZVDFKJiMaFc5sAYS97qVtMxpvceittobtoH2JKmpweSN1CLSe91hiE1Wrf5YJhsQ',
  xPubKeySignature: '3045022100b9079d0d9b70da828b0e9c776fe01c5c13fc254a314c0b09a638c8695ec9360c022079922950779080569163c692ed8ee882f9ef37e7b2dff03de9c6756e7599960e',
  privKey: '7708f0b7a60da9b88893e41eb2f59acf13ddc38edd794e1af9c2b57d35e99d85',
  pubKey: '0266efb3b02973233636b153296486cdbc1728e1f42a1062f030af193ab14e1321',
}, {
  xPrivKey: 'xprv9s21ZrQH143K2DoxHNrecLmp121HU4nZRB57jj2cGmSkp9Wrgz2AevFT98AcYocYXEyyWDwC1JUn13beDjQU87FwfCaHiWhgoSx9G31tmDa',
  xPubKey: 'xpub661MyMwAqRbcEhtRPQPeyUiYZ3qmsXWQnPziY7SDq6yjgwr1EXLRCiZvzQsfnQehH8hBzCxNPYCJXx51QKcbervpkBK931H1A9F39z5E1XD',
  xPubKeySignature: '3045022100ed04aca131acf6f030018a7e3dd564788bbad5528e9edb7880f032ae6917bf10022022879ca8a60700c9c3bf9d603ae2555d4be1914084c912579b4bc09a432e9c32',
  privKey: 'a8e36ab9e065a5cc0551938c225d40542b7780a84aff55cb52e4eb4d7f64de11',
  pubKey: '033e44b94789a591380787effbad0a01f41aedd7ed315c931efc51284e99ae34a9',
}, {
  xPrivKey: 'xprv9s21ZrQH143K3dHn6j7zuLSnnMpBAceHfQFDm6R3wbkD26pTSUuZ7JY4549T8mMhwwUeq6SW6guDwy6cUhqs6PwoF2svKKkLjJdeKi1BzUn',
  xPubKey: 'xpub661MyMwAqRbcG7NFCkf1GUPXLPefa5N92dApZUpfVwHBtu9bz2Dof6rXvKjioVpLXRBHKeyX2AxLdtaCbUtz2zx3dE9F4mPkDsARrPaGsSL',
  xPubKeySignature: '3045022100a17dee46810e379aa37104ec1a4e20276aa41eac67b7e555475b15db6f6ee8ca0220472d114368f6d78bd8dba5c5fed77b22437341621d7879331bc48f7ee7701853',
  privKey: '68cc2c1776f3456fcdef12812e634b6adbd676c5b8168a4b2547cf73c5363cfd',
  pubKey: '027597e3a18c829dfdd92f875ae87f2aa4654cbb13db28a92a19401cf6f8ac18cb',
}, {
  xPrivKey: 'xprv9s21ZrQH143K3Wac3NKJ8nZsBsn4HboPtCD2LDB8zkXcmo9q97efAi9i6KkcyBoJ4vjD59corGsdJebmNXud4nH3bCBSo64uWfwauo3Kdco',
  xPubKey: 'xpub661MyMwAqRbcFzf59PrJVvWbjucYh4XFFR8d8bakZ64bebUygexuiWUBwa7EnFosoFstoocLQTrLPeAQThonSrYTDQ18gkS219dLJuwUHDb',
  xPubKeySignature: '30440220023c1902434aaca0c2ed3c92262d56ee4296cd5c7598b009b8556deab2df89e70220714117970debf5cc1232441aa2d1ce335b5b99958acb2d000c4241e2a2fc567f',
  privKey: 'fc97d94e97857b2016a1e68ab0313ce2ea5a791638e8eb0bb6d5a5aa72de01df',
  pubKey: '03a3e04a3fb218b074306ca2a4995ec1ea97ef2b73dd54edfbae9ee56651dd21cc',
}, {
  xPrivKey: 'xprv9s21ZrQH143K2Hxh1Xj59WjAimbDuubNBFknLYPr563BBziVuLhMvw7F3CkYMYj1y6QSbDnKQVHrMGekXi7awjLwKR1XWcMoR3eKEcH65Pa',
  xPubKey: 'xpub661MyMwAqRbcEn3A7ZG5WefuGoRiKNKDYUgP8voTdRaA4o3eSt1cUjRitVc75a2gsifRDufbicYXeQCchDvkRKSSTWi1uy7PPaNHnerGvTa',
  xPubKeySignature: '3044022042f063cd154a359f1d49202d79efc0737c47077ee50e36ed3d796327b9b29a9602206a4baf2902b49d1cb265eb31b9ab12d470fd023a11d9d425679a1630ba0b0e29',
  privKey: '72381546174e6165e39853510bf3353645cb2e19e0499d3bb1d8aef0027352eb',
  pubKey: '037e4163f69c3e2b05e980e3ac5dac06730894b1ba520a15a9d8221245d4bfe2a4',
}, {
  xPrivKey: 'xprv9s21ZrQH143K2L2wxVQ5nJ8FrTjz2KHB4wy83Xu6y6jdxmzrKNWvh6g7apPJqwj5NjhrmyJ6TYe9Hk4fbYx4tRg7Zk4Y7dAdgej4RVeUBTn',
  xPubKey: 'xpub661MyMwAqRbcEp7R4Ww69S4zQVaURn12SAtiqvJiXSGcqaKzruqBEtzbS97V145KiYxsW4g9M3pqsibfc5mtbMn4R52v7bnnrHGAoiHb1pz',
  xPubKeySignature: '304402207b082a63fc39b90a0f18edeb20d191430f11a9e5378681f15a68aac052aa858202201fd127b374e4a301a45f0c73d2a747d156a60075e643308e489a672bd0a7b4fb',
  privKey: 'daff48eab1268c23e9ecde993b93ace4a375e7c627da0d3662746c7e3fecbdfa',
  pubKey: '02035c09deeef7436df39a09ef2167129c686c6177185216525b9d778af96bacd7',
}, {
  xPrivKey: 'xprv9s21ZrQH143K3Pqe7LhTkE84VM6GysvSvggfhS3KbHvgBLaaQeR9YNePRo3vpLMVBv5SNhNVAaEDyj6Q8vMRVYM4X9bWYCiPgsJXkH8WzX1',
  xPubKey: 'xpub661MyMwAqRbcFLRkhYzK8eQdoywNHJVsJCMQNDoMks5bZymuMcyDgYfnVQYq2Q9npnVmdTAthYGc3N3uxm5sEdnTpSqBc4YYTAhNnoSxCm9',
  xPubKeySignature: '30440220192ae7345d980f45f908bd63ccad60ce04270d07b91f1a9d92424a07a38af85202201591f0f71dd4e79d9206d2306862e6b8375e13a62c193953d768e884b6fb5a46',
  privKey: '5c0e043a513032907d181325a8e7990b076c0af15ed13dc5e611cda9bb3ae52a',
  pubKey: '03814ac7decf64321a3c6967bfb746112fdb5b583531cd512cc3787eaf578947dc',
}, {
  xPrivKey: 'xprv9s21ZrQH143K2QSAHGxQhUsJYFDcZ6h2oiTjKFPmbnzeNzXgRW73NwX7ifBgbJ35eHGR7toyj9CCXB6Wzf5iCjj3YDuJuvBoJFJsiQAdTUH',
  xPubKey: 'xpub661MyMwAqRbcEtWdPJVR4cp36H46xZQtAwPL7doPA8XdFnrpy3RHvjqbZxERYNMd4E2tt84xy4F2PqtKkHFDzZbSAaUabp36oZDwwPEqFjK',
  xPubKeySignature: '304502210081a88684d4e27cab752d0df6a746aeb4bbcac57e73edd3847ffb43f1cf6740b20220312598f47dc5e775ea2ba97048764675afa4796173115049b4dacc8882b5c7b7',
  privKey: '01273975489d85ac06f2e47677149420cd4901264cb40e3a756ff901acfc11f6',
  pubKey: '0210eed257f41c9a991f8bd9523f66c3a83c1aab27cd2ccf233f8f5c3caef77e7a',
}, {
  xPrivKey: 'xprv9s21ZrQH143K2bj7Azs1rCkumDJmbNveDA96wDJThzsDEJjBngkFXEr646AbvrTAfRd2scqq7hN48fGXesobx4sKRkddCrLaCpoWUkMJErj',
  xPubKey: 'xpub661MyMwAqRbcF5oaH2Q2DLheKF9FzqeVaP4hjbi5GLQC774LLE4W53AZuMztQ6e6SMmEMj8K8zsP3iMMnJgK2PawWZCh7QcdgAg7eJWSJFr',
  xPubKeySignature: '304402207781231f8bd9a679938057373702afdeec43e84b5b239e2e4dc8e35c63e4ee7102207f7ed929c81dfb59ebd14f56609dcd8255de6337c967704340a2089080fd896f',
  privKey: 'dda3b5d7c6a9294a71b3ae116e69be756bed55f1caf68205e7889baa5fc76dd6',
  pubKey: '03182e14c3d256359ba478d3c7842ad882141f0e61ef905dcb6b5c9786f958f325',
}, ];


module.exports.keyPair = keyPair;
module.exports.message = message;
module.exports.copayers = copayers;
