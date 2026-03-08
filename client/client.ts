import * as anchor from "@coral-xyz/anchor";

const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

const program = anchor.workspace.Dulceria;

async function crearDulce() {

    const dulce = anchor.web3.Keypair.generate();

    await program.methods
        .crearDulce("Chocolate", 20, 50)
        .accounts({
            dulce: dulce.publicKey,
            usuario: provider.wallet.publicKey,
            systemProgram: anchor.web3.SystemProgram.programId,
        })
        .signers([dulce])
        .rpc();

    console.log("Dulce creado:", dulce.publicKey.toString());
}

async function leerDulce(dulcePublicKey) {

    const cuenta = await program.account.dulce.fetch(dulcePublicKey);

    console.log("Nombre:", cuenta.nombre);
    console.log("Precio:", cuenta.precio);
    console.log("Cantidad:", cuenta.cantidad);
}

async function actualizarDulce(dulcePublicKey) {

    await program.methods
        .actualizarDulce("Paleta", 10, 100)
        .accounts({
            dulce: dulcePublicKey,
            usuario: provider.wallet.publicKey,
        })
        .rpc();

    console.log("Dulce actualizado");
}

async function eliminarDulce(dulcePublicKey) {

    await program.methods
        .eliminarDulce()
        .accounts({
            dulce: dulcePublicKey,
            usuario: provider.wallet.publicKey,
        })
        .rpc();

    console.log("Dulce eliminado");
}

crearDulce();
