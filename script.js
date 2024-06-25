document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Lấy giá trị từ form
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;

    // Tạo thông báo đặt hàng
    const orderSummary = `Bạn đã đặt ${quantity} ${product}. Cảm ơn bạn!`;

    // Hiển thị thông báo
    document.getElementById('orderSummary').textContent = orderSummary;
});
