<template>
    <div class="modal-backdrop">
        <div class="modal-box">
            <h3>社群守則</h3>
            <dl class="list-group-numbered">
                <dt class="">禁止事項</dt>
                <dd class="list-group-item">放個人或他人隱私</dd>
                <dd class="list-group-item">惡意誹謗、辱罵他人</dd>
                <dd class="list-group-item">傳播不實消息與非法資訊</dd>
</dl>
<dl>
<dt class="">注意</dt>
                <dd class="list-group-item">此為個人整理，跟任何展覽、場次官方毫無關係</dd>
                <dd class="list-group-item">2025年8月9日過後不再更新</dd>
            
</dl>
            <button class="btn" @click="$emit('close')">我知道了</button>
        </div>
    </div>
</template>

<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-box {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 400px;
}
</style>
